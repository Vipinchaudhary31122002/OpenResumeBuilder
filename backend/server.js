const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("server is working");
});

// LandingPage
// app.use("/", express.static(path.join(__dirname, "./app/dist")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./app/dist/index.html"));
// });

// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
