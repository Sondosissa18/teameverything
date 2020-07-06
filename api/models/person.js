import mongoose from "mongoose";

const PersonSchema = mongoose.Schema(
  {
    name: String,
    clothes: String,
    height: Number,
    employed: Boolean,
    children: [{ name: String, age: Number }],
  },
  {
    timestamps: true,
  }
);

export const PeopleModel = mongoose.model("Person", PersonSchema);
