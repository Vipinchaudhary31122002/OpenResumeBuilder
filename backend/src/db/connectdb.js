const connect = require("mongoose");
require("dotenv").config();

connect(
  `mongodb+srv://devadmin:${process.env.DATABASE_PASSWORD}@atlascluster.0lbm7hz.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`
)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
