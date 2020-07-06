import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    location: String,
    password: String,
    school: String,
    photo: String,
    //children: [{ name: String, age: Number }],
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
  photo: "https://via.placeholder.com/250x250.png?text=Fake+Image+Bruh",
};
