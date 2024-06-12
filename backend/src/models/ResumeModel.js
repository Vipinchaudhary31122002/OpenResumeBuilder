import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    resumename: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { collection: "Resumes", timestamps: true }
);

export const Resume = mongoose.model("Resume", ResumeSchema);