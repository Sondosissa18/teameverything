import express from "express";
import { UserModel, exampleUser } from "../models/index.js";

export default (app) => {
  const router = express.Router();

  /**
   * req.body = {email:"a@a", password: "password"}
   */
  router.post("/login", async (req, res) => {
    try {
      // create an instance of the person model
      //const user = new UserModel(req.body);
      //await user.save();
      
      res.json(exampleUser);
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send(err.message);
    }
  });
  

  /**
   * req.body = {name: "name", password:"password", email: "email@me.com", location: "houston, tx", school: "Westpoint School" }
   */
  router.post("/register", async (req, res) => {
    try {
      // create an instance of the person model
      //const user = new UserModel(req.body);
      //await user.save();
      
      res.json(exampleUser);
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send(err.message);
    }
  });
  

  

  app.use("/auth", router);
};
