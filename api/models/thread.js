import mongoose from "mongoose";
import { sanitizeUser } from "./user";

const ThreadSchema = mongoose.Schema(
  {
    threadId: String,
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

const genThreadId = (participants) => participants.sort((a, b) => a.length - b.length).join("::");

export const findOrCreateThread = async (people = []) => {
  const participants = people.map((p) => `${p}`);
  const threadId = genThreadId(participants);
  const params = { threadId };
  let thread = await ThreadModel.findOne(params);
  if (!thread) {
    thread = ThreadModel.create({
      threadId,
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
    const participants = thread.participants.map(sanitizeUser);
    const threadName = participants.map((p) => p.displayName).join(" & ");
    return {
      ...thread._doc,
      participants,
      threadName,
    };
  });

  return threads;
};
