import authController from "./auth.js";
import userController from "./user.js";
//import deleteController from "./delete";

export const registerExpressRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  authController(app);
  userController(app);
  //deleteController(app);
};
