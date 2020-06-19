var mongoose = require('mongoose');
var db = require('./connection.js')

var imageSchema = new mongoose.Schema({
  businessId: Number,
  title: String,
  imageUrl: String,
  thumbnail: String,
  createdAt: Date,
  username : String
})

const Gallery = mongoose.model('Gallery', imageSchema);

module.exports = Gallery;