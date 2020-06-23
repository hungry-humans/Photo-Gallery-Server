var mongoose = require('mongoose');
var Gallery = require('./schema.js');
var faker = require('faker');
var db = require('./connection.js');
var aws = require('aws-sdk');
var config = require('../config.json');

 (async function () {
  try {

    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
      region: 'us-west-1'
    });

    const s3 = new aws.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'hungryhumans'
    }).promise();

    // console.log('respooooooooooonse', response);
    var sampleData = [];
    for ( var i = 0; i < response.Contents.length; i++) {
      sampleData.push(createSample(i, response.Contents[i].Key));
    }

    Gallery.create(sampleData)
    .then(() => {
      console.log('Successfully created');
      mongoose.connection.close()}
      );
    // console.log('filename', fileNmae);

  } catch (e) {
    console.log('our error' , e)
  }
  // debugger;

})();



function createSample(id, fileName) {
  return {
  businessId: id,
  title : faker.company.companyName(),
  imageUrl: 'https://source.unsplash.com/1600x900/?burger',
  thumbnail: encodeURI('https://hungryhumans.s3-us-west-1.amazonaws.com/'+ fileName),
  createdAt: faker.date.recent(),
  username : faker.name.firstName() + ' ' + faker.name.lastName()}
}
