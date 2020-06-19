var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/photoGallery', {useNewUrlParser: true});

module.exports = db;