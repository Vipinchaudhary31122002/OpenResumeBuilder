import { User } from "../models/UserModel.js";
import { Resume } from "../models/ResumeModel.js";
import bcrypt from "bcryptjs";

export const EmailChange = async (req, res) => {
  try {
    const { newemail } = req.body;
    const { _id } = req.userdata;
    const existingEmail = await User.findOne({ email: newemail });
    if (existingEmail) {
      return res.status(200).json({ message: "email is being used" });
    }
    await User.findByIdAndUpdate(_id, { email: newemail });
    res.status(200).json({ message: "Email updated successfully" });
  } catch (error) {
    console.error(error);
    res.json({ message: "error occured on server while updating post" });
  }
};

export const PasswordChange = async (req, res) => {
  try {
    const { currentpassword, newpassword } = req.body;
    const { _id } = req.userdata;
    const user = await User.findById(_id);
    const isMatch = await bcrypt.compare(currentpassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newpassword, salt);
    await User.findByIdAndUpdate(_id, { password: hashedPassword });
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred on the server while updating the password",
    });
  }
};

export const DeleteAccount = async (req, res) => {
  console.log("Delete controller reached");
  try {
    const { _id } = req.userdata;
    await Resume.deleteMany({ userId: existingUser._id });
    await User.deleteOne({ _id: _id });
    res
      .status(200)
      .json({ message: "Account deleted successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", success: false });
  }
};
