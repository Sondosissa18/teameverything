import authController from "./auth.js";
import userController from "./user.js";
import chatController from "./chat.js";
import { verifyToken } from "../helpers.js";

export const registerExpressRoutes = (app) => {
  app.use(async (req, res, next) => {
    const authToken = req.headers["authorization"] ? req.headers["authorization"].replace("Bearer", "").trim() : "";
    if (!authToken) {
      return await next();
    }
    try {
      const user = await verifyToken(authToken);
      req.loggedInUser = user;
      await next();
    } catch (err) {
      res.status(401).send("invalid token!");
      next(err);
    }
  });
  authController(app);
  userController(app);
  chatController(app);
};
