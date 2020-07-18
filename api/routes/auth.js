import express from "express";
import { body, validationResult } from "express-validator";
import { UserModel, sanitizeUser } from "../models";
import { signToken, hashPassword, validatePassword } from "../helpers";

const LOGIN_ERROR = "Unable to log into this account. Try again later.";

const USER_OMIT_LIST = ["password", "chats"];

export default (app) => {
  const router = express.Router();
  router.post(
    "/login",
    [
      // email must be an email
      body("email").isEmail().normalizeEmail(),
      // password must be at least 4 chars long
      body("password").isLength({ min: 4 }),
    ],
    async (req, res, next) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
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
        const accessToken = signToken(sanitizeUser(user));
        await UserModel.findByIdAndUpdate(user._id, { accessToken });
        res.json({ accessToken });
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
      }
    },
  );

  router.get("/logout", async (req, res) => {
    try {
     const user = await UserModel.findOne(req.loggedInUser._id);
     user.accessToken=""
     await user.save()
    } finally {
      res.json("ok!");
    }
  });

  router.post(
    "/register",
    [
      body("email").isEmail().normalizeEmail(),
      body("password").isLength({ min: 4 }),
      body("role")
        .custom((value) => ["other", "student", "recruiter"].includes(value))
        .withMessage("Please specify a valid role"),
    ],
    async (req, res, next) => {
      try {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        const { email, password, role = "basic" } = req.body;

        const user = await UserModel.findOne({ email });
        if (user) {
          res.status(500).send("Unable to register this account. Try again later");
          return;
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new UserModel({ email, password: hashedPassword, role });
        const accessToken = signToken(sanitizeUser(newUser));
        newUser.accessToken = accessToken;
        await newUser.save();
        res.json({
          accessToken,
        });
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Unable to register this account. Try again later.");
      }
    },
  );

  app.use("/auth", router);
};
