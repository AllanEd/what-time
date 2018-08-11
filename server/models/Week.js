// @flow

class Week {
  id: string;

  startDate: Date;

  constructor(id: string, startDate: Date) {
    this.id = id;
    this.startDate = startDate;
  }

  static createWeeks(weeks: Array<Object>): Array<Object> {
    return weeks.map(week => new Week(week.id, week.startDate));
  }
}

module.exports = Week;
