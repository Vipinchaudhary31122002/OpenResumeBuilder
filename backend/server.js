const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/admin", (req, res) => {
  res.send("admin page Hello World!");
});

app.get("/client", (req, res) => {
  res.send("Client page Hello World!");
});

app.get("/client1", (req, res) => {
  res.send("Client page Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
