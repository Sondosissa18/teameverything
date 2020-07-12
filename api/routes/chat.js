import express from "express";
import { body, validationResult } from "express-validator";
import keyBy from "lodash/keyBy";
import {
  ChatMessageModel,
  ThreadModel,
  UserModel,
  createNewMessage,
  findOrCreateThread,
  sanitizeUser,
  fetchThreadAndParticipants,
} from "../models";

export default (app) => {
  const router = express.Router();

  router.get("/threads", async (req, res, next) => {
    try {
      const threads = await fetchThreadAndParticipants(req.loggedInUser);
      res.json({ threads });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });

  router.get("/threads/:thread", async (req, res, next) => {
    try {
      const [thread] = await fetchThreadAndParticipants(req.loggedInUser, req.params.thread);
      if (!thread) {
        res.status(403).json("You don't have access to this thread");
        return;
      }

      const chats = await ChatMessageModel.find({ thread: req.params.thread });

      res.json({
        chats,
        participants: thread.participants,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });

  router.post(
    "/",
    [body("to").not().isEmpty(), body("text").not().isEmpty().trim().escape()],
    async (req, res, next) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }

        const thread = await findOrCreateThread([req.loggedInUser._id, req.body.to]);

        const chatMessage = await createNewMessage({
          thread,
          text: req.body.text,
          sender: req.loggedInUser,
        });

        res.json({ chatMessage });
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
      }
    },
  );

  app.use("/chat", router);
};
