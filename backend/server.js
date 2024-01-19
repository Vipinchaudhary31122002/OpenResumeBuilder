const express = require("express");
const path = require('path');
const app = express();
const port = 3000;


// app.get('/', (req, res)=>{
//   console.log(req .url);
//   res.sendFile(path.join(__dirname, "build", index.html))
// })

app.get("/backend/admin", (req, res) => {
  console.log(req .url);
  res.send("admin page Hello World!");
});

app.get("/backend/client", (req, res) => {
  res.send("Client page Hello World!");
});

app.get("/backend/client1", (req, res) => {
  res.send("Client1 page Hello World!");
});

app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  console.log(req .url);
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
