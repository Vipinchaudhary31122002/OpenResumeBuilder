import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { SECRET_TOKEN_KEY } from "../constants.js";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      min: 4,
      required: true,
    },
  },
  { collection: "Users", timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign(
    { id: this._id, username: this.username, email: this.email },
    SECRET_TOKEN_KEY,
    {
      expiresIn: "10h",
    }
  );
};

export const User = mongoose.model("User", userSchema);
