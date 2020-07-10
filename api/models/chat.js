import mongoose from "mongoose";
const UserChatSchema = mongoose.Schema({
  _id: String,
  name: String,
  avatar: String,
});
export const UserChatModel = mongoose.model("UserChat", UserChatSchema);
export const createUserChatModel = (user) => ({
  _id: user._id,
  name: user.displayName || "",
  avatar: user.picLocation || "",
});
const ChatSchema = mongoose.Schema(
  {
    thread: {
      type: String,
      required: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: UserChatSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
export const ChatModel = mongoose.model("Chat", ChatSchema);
export const createNewMessage = (text, user) =>
  new ChatModel({
    text,
    user: createUserChatModel(user),
  });