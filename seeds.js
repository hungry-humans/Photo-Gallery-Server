var mongoose = require('mongoose');
var Gallery = require('./schema.js');
var faker = require('faker');
var db = require('./connection.js')


function createSample(id) {
  return {
  businessId: id,
  title : faker.company.companyName(),
  imageUrl: 'https://source.unsplash.com/1600x900/?burger',
  thumbnail: 'https://source.unsplash.com/1600x900/?burger', // I'm gonna change this later to S3
  createdAt: faker.date.recent(),
  username : faker.name.firstName() + ' ' + faker.name.lastName()}
}


const insertSampleImages = function(numSample) {
  var sampleData = []
  for (var i = 0; i < numSample; i++) {
    sampleData.push(createSample(i))
  }
  Gallery.create(sampleData)
  .then(() => {
    console.log('Successfully created')
    db.disconnect()}
    );
};

insertSampleImages(100);
