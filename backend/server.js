const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;


// Admin
app.use('/admin', express.static(path.join(__dirname, '../admin/dist')));
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../admin/dist/index.html'));
});

// Client
app.use('/client', express.static(path.join(__dirname, '../client/dist')));
app.get('/client/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/api/data', (req, res)=>{
  res.json({
    "first": {
      "name": "demon",
      "location": "hell"
    },
    "seond": {
      "name": "lucifer",
      "location": "heaven"

    }
  })
})

// Frontend
app.use('/', express.static(path.join(__dirname, '../frontend/dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.use('_', (req, res) => {
  res.send("404 page")
});

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


