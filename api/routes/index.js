import authController from "./auth.js";
import userController from "./user.js";
import { verifyToken } from "../helpers.js";

export const registerExpressRoutes = (app) => {
  app.use(async (req, res, next) => {
    const authToken = req.headers["authorization"];
    if (!authToken) {
      console.log("No token supplied");
      return next();
    }
    console.log("why are we here");
    try {
      const user = await verifyToken(authToken);
      req.loggedInUser = user;
      next();
    } catch (err) {
      res.status(500).send("Internal Server Error");
      next();
      return;
    }
  });

  authController(app);
  userController(app);
};
