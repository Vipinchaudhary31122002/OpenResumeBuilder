const express = require('express');
const path = require('path');
// import "dotenv/config";
require('dotenv').config()

const app = express();
const port = process.env.PORT;


// LandingPage
app.use("/", express.static(path.join(__dirname, "./apps/landingpage/dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./apps/landingpage/dist/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
