import express from "express";
import { UserModel, exampleUser } from "../models/index.js";
import { uploader } from "../helpers.js";

export default (app) => {
  const router = express.Router();

  /**
   * req.body = {picture: form data}
   */
  router.post("/upload-pic", uploader.single("picture"), async (req, res) => {
    try {
      const picLocation = `/uploads/${req.file.filename}`;
      const user = await UserModel.findOneAndUpdate({ _id: req.loggedInUser._id }, { picLocation });
      res.json({ picLocation });
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
  });

  router.get("/get-user", async (req, res) => {
    try {
      const user = await UserModel.findOne({ _id: req.loggedInUser._id });
      res.json(defaultUser);
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });

  router.patch("/update-user", async (req, res) => {
    try {
      const user = await UserModel.findOneAndUpdate({ _id: req.loggedInUser._id });
      //defaultUser
      //{ _id: req.loggedInUser._id }
      //req.body, { new: true };
      //res.json({ ...exampleUser });
      res.json(defaultUser);
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send(err.message);
    }
  });

  router.delete("/", async (req, res) => {
    try {
      const user = await UserModel.findByIdAndRemove({ _id: req.loggedInUser._id });
      res.json(defaultUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
  });

  app.use("/user", router);
};
