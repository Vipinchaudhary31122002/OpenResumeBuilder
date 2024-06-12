import mongoose from "mongoose";
import { MONGODB_URL } from "../constants.js";

const dbName = "OpenResumeBuilder";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, { dbName });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
