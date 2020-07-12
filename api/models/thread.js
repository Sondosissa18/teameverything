import mongoose from "mongoose";
import { sanitizeUser } from "./user";

const ThreadSchema = mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const ThreadModel = mongoose.model("Thread", ThreadSchema);

export const findOrCreateThread = async (participants = []) => {
  let thread = await ThreadModel.findOne({ participants: { $in: participants } });
  if (!thread) {
    thread = ThreadModel.create({
      participants,
    });
  }
  return thread;
};

export const fetchThreadAndParticipants = async (user, threadId) => {
  const params = {
    ...(threadId && { _id: threadId }),
    participants: { $in: [user._id] },
  };
  const threadsRaw = await ThreadModel.find(params).populate("participants");
  const threads = threadsRaw.map((thread) => {
    const participants = thread.participants.filter((p) => `${p._id}` !== `${user._id}`).map(sanitizeUser);
    const threadName = participants.map((p) => p.displayName).join(" & ");
    return {
      ...thread._doc,
      participants,
      threadName,
    };
  });

  return threads;
};
