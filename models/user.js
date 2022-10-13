import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    inbox: {
      type: Array,
      default: [],
    },
    outbox: {
      type: Array,
      default: [],
    },
    starred: {
      type: Array,
      default: [],
    },
    telephone: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
