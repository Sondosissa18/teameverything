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
      //..const user = await UserModel.findOne({ photo });
      //..const newUser = new UserModel({ photo: `/uploads/${req.file.filename}` });
      //..await newUser.save();
      res.json({ ...exampleUser, photo: `/uploads/${req.file.filename}` });
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send(err.message);
    }
  });

  router.delete("/", async (req, res) => {
    try {
      res.json({ ...exampleUser });
    } catch (err) {
      req.log.error(err.message);
      res.status(500).send(err.message);
    }
  });

  // router.put("/update-user", async (req, res) => {
  //   try {
  //    const user = await UserModel.findOneAndUpdate(displayName: req.params.update-userdisplayName),
  //    req.body, {new: true}
  //    res.json({...exampleUser})
  //     res.json({ ...exampleUser, school:"", location:"", displayName:"", about:"" });
  //   } catch (err) {
  //     req.log.error(err.message);
  //     res.status(500).send(err.message);
  //   }
  // });

  app.use("/user", router);
};
