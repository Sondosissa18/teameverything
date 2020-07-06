import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    location: String,
    password: String,
    school: String,
    //children: [{ name: String, age: Number }],
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("User", UserSchema);
export const exampleUser = {
  "id": 1,
  "name": "name",
  "email": "email@me.com",
  "token": "token",
  "location": "houston, tx",
  "school": "Westpoint School"
}

