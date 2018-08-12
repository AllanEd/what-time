const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const appointments = [{
  _id: ObjectId('5b64a1d8bb4b5d57d8566126'),
  subscribers: [
    ObjectId('5b64a1d8bb4b5d57d8566120'),
    ObjectId('5b64a1d8bb4b5d57d8566121'),
    ObjectId('5b64a1d8bb4b5d57d8566122'),
    ObjectId('5b64a1d8bb4b5d57d8566123'),
    ObjectId('5b64a1d8bb4b5d57d8566124'),
    ObjectId('5b64a1d8bb4b5d57d8566125'),
  ],
  title: 'Appointment 1',
  creator: ObjectId('5b64a1d8bb4b5d57d8566124'),
  startDate: new Date('2018-08-06T12:41:04.588Z'),
  isDone: true,
  __v: 0,
}];

module.exports = appointments;
