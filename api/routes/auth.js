import express from "express";
import omit from "lodash/omit";
import { UserModel } from "../models";
import { signToken, hashPassword } from "../helpers";
import { validatePassword } from "../helpers.js";

const LOGIN_ERROR = "Unable to log into this account. Try again later.";

export default (app) => {
  const router = express.Router();

  /**
   * req.body = {email:"a@a", password: "password"}
   */

  router.post("/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) {
        res.status(500).send(LOGIN_ERROR);
        return;
      }
      const validPassword = await validatePassword(password, user.password);
      if (!validPassword) {
        res.status(500).send(LOGIN_ERROR);
        return;
      }
      const accessToken = signToken(
        omit(JSON.parse(JSON.stringify(user)), ["password"])
      );
      await UserModel.findByIdAndUpdate(user._id, { accessToken });
      res.json({ accessToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });

  router.get("/logout", async (req, res) => {
    try {
      await UserModel.findOneAndUpdate(req.loggedInUser._id, {
        accessToken: "",
      });
    } finally {
      res.json("ok!");
    }
  });

  /**
   * req.body = {name: "name", password:"password", email: "email@me.com", location: "houston, tx", school: "Westpoint School" }
   */

  router.post("/register", async (req, res, next) => {
    try {
      const { email, password, role = "basic" } = req.body;

      const user = await UserModel.findOne({ email });
      if (user) {
        res
          .status(500)
          .send("Unable to register this account. Try again later");
        return;
      }
      const hashedPassword = await hashPassword(password);
      const newUser = new UserModel({ email, password: hashedPassword, role });
      const accessToken = signToken(
        omit(JSON.parse(JSON.stringify(newUser)), ["password"])
      );
      newUser.accessToken = accessToken;
      await newUser.save();
      res.json({
        accessToken,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Unable to register this account. Try again later.");
    }
  });

  app.use("/auth", router);
};
