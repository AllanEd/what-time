// @flow

const weekFactory = require('../factories/weekFactory');

class Week {
  id: string;

  startDate: Date;

  static factory: Object;

  constructor(id: string, startDate: Date) {
    this.id = id;
    this.startDate = startDate;
  }

  static createWeeks(weeks: Array<Object>): Array<Object> {
    return weeks.map(week => new Week(week.id, week.startDate));
  }
}

Week.factory = weekFactory;

module.exports = Week;
