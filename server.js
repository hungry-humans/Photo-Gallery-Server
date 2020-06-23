const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Gallery = require('./database/schema.js');
const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./client/dist'));

app.get('/header', function(req, res) {
  Gallery.find({}).exec(function(err,blogs) {
    res.send(blogs);
  })
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))