// @flow

import Day from './Day';
import weekFactory from '../factories/weekFactory';

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

export default Week;
