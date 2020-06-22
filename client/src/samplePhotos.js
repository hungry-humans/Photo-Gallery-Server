import mongoose from 'mongoose';
import faker from 'faker';

var samplePhotos = [
  {
    _id : '5eeda69f3d14f290dc5919ea',
    businessId : 1,
    title : 'Towne - Hudson',
    imageUrl : 'https://source.unsplash.com/1600x900/?burger',
    thumbnail : 'https://hungryhumans.s3-us-west-1.amazonaws.com/258s%20(2).jpg',
    createdAt : '2020-06-20T03:34:15.329Z',
    username : 'Augustus Johnson',
    __v : 0
  },

  {
    _id : '5eeda69f3d14f290dc5919eb',
    businessId : 2,
    title : 'Emard, Volkman and Hoppe',
    imageUrl : 'https://source.unsplash.com/1600x900/?burger',
    thumbnail : 'https://hungryhumans.s3-us-west-1.amazonaws.com/258s%20(3).jpg',
    createdAt : '2020-06-19T08:32:12.242Z',
    username : 'Gustave Hills',
    __v : 0
  },

  {
    _id : '5eeda69f3d14f290dc5919ec',
    businessId : 3,
    title : 'Murray - Nader',
    imageUrl : 'https://source.unsplash.com/1600x900/?burger',
    thumbnail : 'https://hungryhumans.s3-us-west-1.amazonaws.com/258s%20(4).jpg',
    createdAt : '2020-06-19T20:41:16.877Z',
    username : 'Joe Schumm',
    __v  : 0
  }
  ]

  export default samplePhotos;
