import mongoose from "mongoose";
import { MONGODB_URL } from "../constants.js";

const dbName = "OpenResumeBuilder";

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB with URL:", MONGODB_URL);
    await mongoose.connect(
      "mongodb+srv://devadmin:UwnzkPvtrsuuijmP@atlascluster.0lbm7hz.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster",
      { dbName }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
