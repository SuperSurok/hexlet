//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
class Time {
  static fromString(time) {
    const [hours, minutes] = time.split(':');
    return new Time(hours, minutes);
  }

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}

//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
class TimeMaster {
  static fromString(time) {
    const [hours, minutes] = time.split(':');
    return new Time(hours, minutes);
  }

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}