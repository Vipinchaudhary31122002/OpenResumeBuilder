import { Resume } from "../models/ResumeModel.js";

export const CreateResume = async (req, res) => {
  try {
    const resume = {
      resumename: req.body.resumename,
      userId: req.userdata._id,
    };
    const newResume = await Resume.create(resume);
    res.status(201).json({ success: true, message: "resume created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Could not create resume" });
  }
};

export const UserResumes = async (req, res) => {
  try {
    const { id } = req.userdata;
    const userresumes = await Resume.find({ userId: id });
    res.status(201).json([...userresumes]);
  } catch (error) {
    console.error(error);
  }
};

export const DeleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    await Resume.findByIdAndDelete(id);
    res.status(201).json({ message: "post deleted", success: true });
  } catch (error) {
    console.error(error);
  }
};
