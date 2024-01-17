const express = require("express");
const path = require('path');
const app = express();
const port = 3000;


app.get("/admin", (req, res) => {
  res.send("admin page Hello World!");
});

app.get("/client", (req, res) => {
  res.send("Client page Hello World!");
});

app.get("/client1", (req, res) => {
  res.send("Client1 page Hello World!");
});

app.use(express.static(path.join(__dirname, '../frontend/dist')));

// app.get("/", (req, res) => {
//   res.json({
//      'name': 'demon'
//    })
//    res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
