import authController from "./auth.js";


export const registerExpressRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  authController(app);
};
