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
      //TODO: save user.photo = `/uploads/${req.file.filename}`

      res.json({ ...exampleUser, photo: `/uploads/${req.file.filename}` });
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
  });

  app.use("/user", router);
};
