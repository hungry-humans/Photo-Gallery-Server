var express = require('express');
var app = express;
var port = 5500;

app.use(express.static('./client'));

app.get('/photogallery', function (req, res) {
  console.log(req.body)
  res.send(200);
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))