import express from "express";
import omit from "lodash/omit";
import { v4 as uuidv4 } from "uuid";
import { ChatModel, UserModel } from "../models";
import { createUserChatModel } from "../models/chat";

export default (app) => {
  const router = express.Router();
  router.get("/", async (req, res, next) => {
    try {
      const { chats } = await UserModel.findOne({ _id: req.loggedInUser._id });
      res.json({ chats });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });
  router.get("/:thread", async (req, res, next) => {
    try {
      const thread = await ChatModel.find({ thread: req.params.thread });
      res.json({ thread });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });
  /**
   * {
   * to: ObjectId("hduwehduiewhdiuegwyudgew") (this is a user id of the person you want to send a message to),
   * }
   */
  router.post("/", async (req, res, next) => {
    try {
      // find the person that is sending the message
      const sender = await UserModel.findOne({ _id: req.loggedInUser._id });
      // find the person that the message is going to
      const receiver = await UserModel.findOne({ _id: req.body.to });
      let hasChat = [];
      try {
        // Check if these people have spoken to each other before
        hasChat = [sender.chats, receiver.chats].reduce((a, b) =>
          a.filter((c) => b.includes(c))
        );
      } catch (err) {
        console.info("No chats but its okay!!!!!", { hasChat });
      }
      let newThreadId;
      // if they haven't spoken before create a new thread
      if (hasChat.length === 0) {
        let newThreadId = uuidv4();
        // add a thread to each user
        sender.chats = sender.chats
          ? [...sender.chats, newThreadId]
          : [newThreadId];
        receiver.chats = receiver.chats
          ? [...receiver.chats, newThreadId]
          : [newThreadId];
        // Todo concurrency vs parallellism Rob Pike (youtube video)
        // wait for the both of them to save before we continue
        await Promise.all([sender.save(), receiver.save()]);
      }
      // the current thread is either the newly created thread or the intersected thread ie: index 0 (hasChat.length > 0)
      // at this point
      const currentThread = newThreadId || hasChat[0];
      // add the message to the newly created or old thread
      const chatModelMessage = {
        thread: currentThread,
        text: req.body.text,
        user: createUserChatModel(req.loggedInUser),
      };
      console.log(chatModelMessage)
      const chatMessage = await ChatModel.create(chatModelMessage);
      res.json({
        chatMessage,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  });
  app.use("/chat", router);
};
