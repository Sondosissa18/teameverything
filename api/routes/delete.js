import express from "express";
import { UserModel, exampleUser } from "../models/index.js";
//import { uploader } from "../helpers.js";

export default (app) => {
  const router = express.Router();

  router.post("/delete-user", async (req, res) => {
    try {
      res.json({ ...exampleUser });
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send(err.message);
    }
  });

  app.use("/user", router);
};
