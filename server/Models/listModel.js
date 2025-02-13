import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  exp: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

export default new mongoose.model("LIST", Schema);
