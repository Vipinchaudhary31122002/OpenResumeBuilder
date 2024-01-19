const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../frontend/dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname));
});

app.use('/admin', express.static(path.join(__dirname, '../admin/dist')));
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname));
});

app.use('/client', express.static(path.join(__dirname, '../client/dist')));
app.get('/client', (req, res) => {
  res.sendFile(path.join(__dirname));
});

app.use((req, res) => {
  res.send("404 page")
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});



