const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const users = [
  {
    _id: ObjectId('5b64a1d8bb4b5d57d8566120'),
    createdAppointments: null,
    subscribedAppointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Tom',
    email: 'tom.starke@gmail.com',
    registered: null,
    lastSignIn: new Date('2018-05-25T13:02:09.012Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566121'),
    createdAppointments: null,
    subscribedAppointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Frank',
    email: 'frank-elstner@aol.de',
    registered: null,
    lastSignIn: new Date('2018-04-24T19:25:51.190Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566122'),
    createdAppointments: null,
    subscribedAppointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Italian',
    email: 'italian_barbarian@web.de',
    registered: null,
    lastSignIn: new Date('2016-02-18T11:00:18.381Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566123'),
    createdAppointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    subscribedAppointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Alex',
    password: 'test',
    email: 'alexander.sattelmaier@gmail.com',
    registered: new Date('2012-03-07T14:28:34.643Z'),
    lastSignIn: new Date('2018-02-01T04:17:29.914Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566124'),
    createdAppointments: null,
    subscribedAppointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Steffen',
    email: 'steffen@steffen.de',
    registered: null,
    lastSignIn: new Date('2016-10-30T12:17:22.479Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566125'),
    createdAppointments: null,
    subscribedAppointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Simon',
    email: 'simon@gosejohan.profi',
    registered: null,
    lastSignIn: new Date('2017-05-12T10:58:23.526Z'),
    __v: 0,
  },
];

module.exports = users;
