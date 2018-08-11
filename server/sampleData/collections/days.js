const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const days = [
  {
    _id: ObjectId('9b94a1d8bb4b5d57d8566120'),
    date: new Date('2018-08-06T12:41:04.588Z'),
    subscribers: [
      ObjectId('5b64a1d8bb4b5d57d8566120'),
      ObjectId('5b64a1d8bb4b5d57d8566121'),
    ],
    timeSlots: {
      '06:00 AM': [ObjectId('5b64a1d8bb4b5d57d8566120'), ObjectId('5b64a1d8bb4b5d57d8566121')],
      '06:30 AM': [ObjectId('5b64a1d8bb4b5d57d8566120'), ObjectId('5b64a1d8bb4b5d57d8566121')],
      '07:00 AM': [ObjectId('5b64a1d8bb4b5d57d8566120')],
      '07:30 AM': [ObjectId('5b64a1d8bb4b5d57d8566120')],
      '11:00 AM': [ObjectId('5b64a1d8bb4b5d57d8566121')],
      '11:30 AM': [ObjectId('5b64a1d8bb4b5d57d8566121')],
      '12:00 AM': [ObjectId('5b64a1d8bb4b5d57d8566120'), ObjectId('5b64a1d8bb4b5d57d8566121')],
      '00:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566120')],
      '00:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566120')],
      '01:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566120')],
      '07:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566120')],
      '07:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566120')],
      '08:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566120')],
    },
    __v: 0,
  }, {
    _id: ObjectId('9b94a1d8bb4b5d57d8566121'),
    date: new Date('2018-08-08T12:41:04.588Z'),
    subscribers: [
      ObjectId('5b64a1d8bb4b5d57d8566124'),
    ],
    timeSlots: {
      '02:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '02:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '03:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '03:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '04:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '04:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '05:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '05:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '06:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '06:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '07:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '07:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '08:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '08:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '09:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
    },
    __v: 0,
  }, {
    _id: ObjectId('9b94a1d8bb4b5d57d8566122'),
    date: new Date('2018-08-10T12:41:04.588Z'),
    subscribers: [
      ObjectId('5b64a1d8bb4b5d57d8566120'),
      ObjectId('5b64a1d8bb4b5d57d8566121'),
      ObjectId('5b64a1d8bb4b5d57d8566122'),
      ObjectId('5b64a1d8bb4b5d57d8566123'),
      ObjectId('5b64a1d8bb4b5d57d8566124'),
      ObjectId('5b64a1d8bb4b5d57d8566125'),
    ],
    timeSlots: {
      '02:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '02:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '03:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '03:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '04:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '04:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '05:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '05:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '06:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '06:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '07:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '07:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '08:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566120'), ObjectId('5b64a1d8bb4b5d57d8566121'),
        ObjectId('5b64a1d8bb4b5d57d8566122'), ObjectId('5b64a1d8bb4b5d57d8566123'),
        ObjectId('5b64a1d8bb4b5d57d8566124'), ObjectId('5b64a1d8bb4b5d57d8566125')],
      '08:30 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
      '09:00 PM': [ObjectId('5b64a1d8bb4b5d57d8566124')],
    },
    __v: 0,
  },
];

module.exports = days;
