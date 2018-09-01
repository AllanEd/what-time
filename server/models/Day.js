// @flow

import dayFactory from '../factories/dayFactory';

class Day {
  id: string;

  date: Date;

  subscribers: Array<Object>;

  timeSlots: Object;

  static factory: Object;

  constructor(dayData: Object) {
    this.id = dayData.id;
    this.date = dayData.startDate;
    this.subscribers = dayData.subscribers.toBSON().map(id => id.toJSON());
    this.timeSlots = Day.factory.makeTimeslots(dayData.timeSlots);
  }
}

Day.factory = dayFactory;

export default Day;
