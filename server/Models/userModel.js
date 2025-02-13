import mongoose from "mongoose";
import Jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
  },
});
// JWT TOKEN
userSchema.methods.createToken = function () {
  return Jwt.sign({ id: this._id }, process.env.JWT_SECREAT, {
    expiresIn: "4d",
  });
};

const Schema = mongoose.model("User", userSchema);
export default Schema;
