import authController from "./auth.js";
import userController from "./user.js";

export const registerExpressRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  authController(app);
  userController(app);
};
