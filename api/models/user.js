import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "other",
      enum: ["other", "student", "recruiter"],
    },
    accessToken: {
      type: String,
    },
    location: {
      type: String,
      trim: true,
    },
    school: {
      type: String,
      trim: true,
    },
    picLocation: {
      type: String,
    },
    displayName: {
      type: String,
      trim: true,
    },
    about: {
      type: String,
      trim: true,
    },
    chats: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);
export const UserModel = mongoose.model("User", UserSchema);
export const exampleUser = {
  id: 1,
  name: "name",
  email: "email@me.com",
  token: "token",
  location: "houston, tx",
  school: "Westpoint School",
  displayName: "Stephanie",
  about: "Best Coder in the World.. and Loving It!! I wish!",
  picLocation: "uploads/4dcd5a3b-93e4-4af0-977c-730974a2ed1d.jpg",
  chats: [
    "apple-93e4-4af0-977c-730974a2ed1",
    "banana-93e4-4af0-977c-730974a2ed1",
    "orange-93e4-4af0-977c-730974a2ed1",
    "peach-93e4-4af0-977c-730974a2ed1",
  ],
};