import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  mob_number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
