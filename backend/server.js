const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const { MONGODB_URL, PORT } = process.env;

const cookieParser = require("cookie-parser");
const authRoute = require("./src/routes/AuthRoute");

app.use(cookieParser());
app.use(express.json);
// app.use("/", authRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("server is working");
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
