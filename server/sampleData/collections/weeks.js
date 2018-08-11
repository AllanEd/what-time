const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const weeks = [{
  _id: ObjectId('5b64a1d8bb4b5d57d8566127'),
  subscribers: [
    ObjectId('5b64a1d8bb4b5d57d8566120'),
    ObjectId('5b64a1d8bb4b5d57d8566121'),
    ObjectId('5b64a1d8bb4b5d57d8566122'),
    ObjectId('5b64a1d8bb4b5d57d8566123'),
    ObjectId('5b64a1d8bb4b5d57d8566124'),
    ObjectId('5b64a1d8bb4b5d57d8566125'),
  ],
  startDate: new Date('2018-08-06T12:41:04.588Z'),
  days: {
    mo: ObjectId('9b94a1d8bb4b5d57d8566120'),
    we: ObjectId('9b94a1d8bb4b5d57d8566121'),
    fr: ObjectId('9b94a1d8bb4b5d57d8566122'),
  },
  __v: 0,
}];

module.exports = weeks;
