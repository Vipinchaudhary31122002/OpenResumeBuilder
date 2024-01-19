const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../frontend/dist')));
app.use('/admin', express.static(path.join(__dirname, '../admin/dist')));
app.use('/client', express.static(path.join(__dirname, '../client/dist')));
app.use((req, res) => {
  res.send("404 page")
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
// app.get('/', (req, res) => {
//   console.log('base url hit')
//   res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
// });

// app.get('/admin', (req, res) => {
//   console.log('admin url hit')
//   res.sendFile(path.join(__dirname, '../admin/dist/index.html'));
// });

// app.get('/client', (req, res) => {
//   console.log('client url hit')
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

