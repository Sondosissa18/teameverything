import authController from "./auth.js";
import userController from "./user.js";
import { verifyToken } from "../helpers.js";
const routeIgnoreList = ["/auth/login", "/auth/register"];
export const registerExpressRoutes = (app) => {
  app.use(async (req, res, next) => {
    const authToken = req.headers["authorization"];
    if (!authToken || routeIgnoreList.includes(req.originalUrl)) {
      return await next();
    }
    try {
      const user = await verifyToken(authToken);
      req.loggedInUser = user;
      await next();
    } catch (err) {
      await next(err);
      return;
    }
  });
  authController(app);
  userController(app);
};