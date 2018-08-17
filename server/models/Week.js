// @flow

const Day = require('../models/Day');
const weekFactory = require('../factories/weekFactory');

class Week {
  id: string;

  startDate: Date;

  days: Object;

  subscribers: Array<Object>;

  static factory: Object;

  constructor(weekData: Object) {
    this.id = weekData.id;
    this.startDate = weekData.startDate;
    this.days = Day.factory.makeDays(weekData.days);
    this.subscribers = weekData.subscribers.toBSON().map(id => id.toJSON());
  }
}

Week.factory = weekFactory;

module.exports = Week;
