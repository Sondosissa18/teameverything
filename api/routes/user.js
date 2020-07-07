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
      // create an instance of the person model
      //const user = new UserModel(req.body);
      //await user.save();
      //TODO: save user.photo = `/uploads/${req.file.filename}`

      res.json({ ...exampleUser, photo: `/uploads/${req.file.filename}` });
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send(err.message);
    }
  });

  app.use("/user", router);
};