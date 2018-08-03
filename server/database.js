import mongoose from 'mongoose';
import Event from './models/Event';

mongoose.connect('mongodb://localhost/event', () => {
  mongoose.connection.db.dropDatabase();

  // default test Events
  const events = [{
    title: 'Event 1',
    creator: 1,
    startDate: Date.now(),
    isDone: true,
  }, {
    title: 'Event 2',
    creator: 2,
    startDate: Date.now(),
    isDone: false,
  }, {
    title: 'Event 3',
    creator: 3,
    startDate: Date.now(),
    isDone: true,
  }];

  events.forEach((event) => {
    new Event(event).save();
  });
});
