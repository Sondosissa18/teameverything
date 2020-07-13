import mongoose from "mongoose";
import pick from "lodash/pick";

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
  },
  {
    timestamps: true,
  },
);

export const UserModel = mongoose.model("User", UserSchema);

export const USER_FIELDS = "_id name email location school displayName about picLocation";
export const findUserById = (id) => UserModel.findById(id, USER_FIELDS);
export const findUsers = () => UserModel.find({}, USER_FIELDS);
export const sanitizeUser = (user) => pick(user, USER_FIELDS.split(" "));

export const exampleUser = {
  _id: "82te8gb23bbu263gd232e3",
  name: "name",
  email: "email@me.com",
  token: "token",
  location: "houston, tx",
  school: "Westpoint School",
  displayName: "Stephanie",
  about: "Best Coder in the World.. and Loving It!! I wish!",
  picLocation: "uploads/4dcd5a3b-93e4-4af0-977c-730974a2ed1d.jpg",
};
