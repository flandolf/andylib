const moment = require('moment');
class time {
    constructor() {
        this.now = moment();
    }
    until(day, month, year) {
        const until = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        const duration = moment.duration(until.diff(this.now));
        return {
            years: duration.years(),
            months: duration.months(),
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds()
        };
    }
    yearsUntil(day, month, year) {
        const until = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        const duration = moment.duration(until.diff(this.now));
        return duration.years();
    }
    monthsUntil(day, month, year) {
        const until = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        const duration = moment.duration(until.diff(this.now));
        return duration.months();
    }
    daysUntil(day, month, year) {
        const until = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        const duration = moment.duration(until.diff(this.now));
        return duration.days();
    }
    hoursUntil(day, month, year) {
        const until = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        const duration = moment.duration(until.diff(this.now));
        return duration.hours();
    }
    minutesUntil(day, month, year) {
        const until = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        const duration = moment.duration(until.diff(this.now));
        return duration.minutes();
    }
    secondsUntil(day, month, year) {
        const until = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        const duration = moment.duration(until.diff(this.now));
        return duration.seconds();
    }

}
module.exports = time;