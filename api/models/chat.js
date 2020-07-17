import mongoose from "mongoose";

const ChatMessageSchema = mongoose.Schema(
  {
    thread: {
      type: mongoose.Types.ObjectId,
      ref: "Thread",
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ChatMessageModel = mongoose.model("ChatMessage", ChatMessageSchema);

export const createNewMessage = async ({ thread, text, sender }) => {
  const chatMessage = await ChatMessageModel.create({
    thread: mongoose.Types.ObjectId(thread._id),
    text,
    sender: mongoose.Types.ObjectId(sender._id),
  });
  return chatMessage;
};
