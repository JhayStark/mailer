import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    starred: {
      type: Boolean,
      default: false,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    recieved: {
      type: String,
      default: false,
    },
    sent: {
      type: String,
      default: false,
    },
    read: {
      type: Boolean,
      default: false,
    },
    time: {
      type: String,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);
export default Email;
