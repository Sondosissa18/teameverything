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
};
