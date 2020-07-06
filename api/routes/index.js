import exampleController from "./example.js";


export const registerExpressRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  exampleController(app);
};
