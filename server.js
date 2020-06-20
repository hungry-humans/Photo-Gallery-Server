const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Gallery = require('./database/schema.js');
const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./client'));

// app.get('/photogallery', function (req, res) {
//   console.log(req.body)
//   res.send(200);
// })

app.get('/', function(req, res) {
  Gallery.find({}).exec(function(err,blogs) {
    res.send(blogs);
  })
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))