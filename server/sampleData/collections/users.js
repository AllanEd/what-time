const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const users = [
  {
    _id: ObjectId('5b64a1d8bb4b5d57d8566120'),
    appointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Tom',
    password: '$2b$10$3jqC1/Xk5M2fIizl/kN2reNU1qL5EjPFqatAH/LJdosn80f/T5RhW',
    email: 'tom.starke@gmail.com',
    registered: null,
    lastLogin: new Date('2018-05-25T13:02:09.012Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566121'),
    appointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Frank',
    password: '$2b$10$3jqC1/Xk5M2fIizl/kN2reNU1qL5EjPFqatAH/LJdosn80f/T5RhW',
    email: 'frank-elstner@aol.de',
    registered: null,
    lastLogin: new Date('2018-04-24T19:25:51.190Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566122'),
    appointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Italian',
    password: '$2b$10$3jqC1/Xk5M2fIizl/kN2reNU1qL5EjPFqatAH/LJdosn80f/T5RhW',
    email: 'italian_barbarian@web.de',
    registered: null,
    lastLogin: new Date('2016-02-18T11:00:18.381Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566123'),
    appointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Alex',
    password: '$2b$10$3jqC1/Xk5M2fIizl/kN2reNU1qL5EjPFqatAH/LJdosn80f/T5RhW',
    email: 'alexander.sattelmaier@gmail.com',
    registered: new Date('2012-03-07T14:28:34.643Z'),
    lastLogin: new Date('2018-02-01T04:17:29.914Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566124'),
    appointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Steffen',
    password: '$2b$10$3jqC1/Xk5M2fIizl/kN2reNU1qL5EjPFqatAH/LJdosn80f/T5RhW',
    email: 'steffen@steffen.de',
    registered: null,
    lastLogin: new Date('2016-10-30T12:17:22.479Z'),
    __v: 0,
  }, {
    _id: ObjectId('5b64a1d8bb4b5d57d8566125'),
    appointments: [
      ObjectId('5b64a1d8bb4b5d57d8566126'),
    ],
    name: 'Simon',
    password: '$2b$10$3jqC1/Xk5M2fIizl/kN2reNU1qL5EjPFqatAH/LJdosn80f/T5RhW',
    email: 'simon@gosejohan.profi',
    registered: null,
    lastLogin: new Date('2017-05-12T10:58:23.526Z'),
    __v: 0,
  },
];

module.exports = users;
