import { sendToken } from "../utils/SecretToken.js";
import { User } from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username });
    res
      .status(201)
      .json({ message: "account created successfully", success: true });
  } catch (error) {
    console.error(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password" });
    }
    sendToken(user, 200, res);
  } catch (error) {
    console.error(error);
  }
};

export const Logout = async (req, res) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({ message: "logout successful" });
};