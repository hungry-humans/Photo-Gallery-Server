const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Gallery = require('./database/schema.js');
const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./client/dist'));

// app.get('/photogallery', function (req, res) {
//   console.log(req.body)
//   res.send(200);
// })

app.get('/header', function(req, res) {
  // console.log('request', req.param.body);
  // console.log('response', res.param);
  // console.log('gallery', Gallery.find({}).schema )
  Gallery.find({}).exec(function(err,blogs) {
    res.send(blogs);
  })
});

// app.post('/header', )


app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))