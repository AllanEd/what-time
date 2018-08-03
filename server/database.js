import mongoose from 'mongoose';

import Event from './models/Event';
import User from './models/User';

/* eslint-disable no-console */

const databaseName = 'mongodb://localhost/what-time';

mongoose.connect(databaseName);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const randomDate = (start, end) => new Date(
  start.getTime() + Math.random() * (end.getTime() - start.getTime()),
);

const createUsers = (eventId, userIds) => {
  const users = [];
  const names = ['Tom', 'Frank', 'Italian', 'Alex', 'Steffen', 'Simon'];
  const emails = ['tom.starke@gmail.com', 'frank-elstner@aol.de', 'italian_barbarian@web.de',
    'alexander.sattelmaier@gmail.com', 'steffen@steffen.de', 'simon@gosejohan.profi'];
  const registered = [null, null, null, randomDate(new Date(2012, 0, 1),
    new Date(2014, 0, 1)), null, null];
  const createdEvents = [null, null, null, [eventId], null, null];

  userIds.forEach((userId, index) => {
    const user = {
      _id: userId,
      name: names[index],
      email: emails[index],
      registered: registered[index],
      lastSignIn: randomDate(new Date(2016, 0, 1), new Date()),
      createdEvents: createdEvents[index],
      subscribedEvents: [eventId],
    };
    users.push(user);
  });

  User.insertMany(users);
};

const createEvents = (eventId, eventCreatorUserId, subscribersId) => {
  const events = [{
    _id: eventId,
    title: 'Event 1',
    creator: eventCreatorUserId,
    subscribers: subscribersId,
    startDate: randomDate(new Date(2018, 0, 1), new Date()),
    isDone: true,
  }];

  events.forEach((event) => {
    new Event(event).save();
  });
};

db.once('open', () => {
  const userIds = [mongoose.Types.ObjectId(), mongoose.Types.ObjectId(), mongoose.Types.ObjectId(),
    mongoose.Types.ObjectId(), mongoose.Types.ObjectId(), mongoose.Types.ObjectId()];
  const eventCreatorUserId = userIds[4];
  const eventId = mongoose.Types.ObjectId();
  createUsers(eventId, userIds);
  createEvents(eventId, eventCreatorUserId, userIds);
});
