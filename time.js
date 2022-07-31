class time {
    until(day, month, year) {
        const now = new Date();
        const target = new Date(year, month - 1, day);
        const diff = target - now;
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff - years * 1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30 - days * 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor((diff - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30 - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor((diff - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30 - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
        return {
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        };
    }
    all(day, month, year) {
        const target = new Date(`${year}-${month}-${day}`);
        const seconds = this.secondsUntil(target);
        const minutes = this.minutesUntil(target);
        const hours = this.hoursUntil(target);
        const days = this.daysUntil(target);
        const months = this.monthsUntil(target);
        const years = this.yearsUntil(target);
        return {
            years,
            months,
            days,
            hours,
            minutes,
            seconds,
        }
    }
    secondsUntil(date) {
        const now = new Date();
        const diff = date.getTime() - now.getTime();
        return Math.floor(diff / 1000);
    }

    monthsUntil(date) {
        const now = new Date();
        const diff = date.getTime() - now.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    }

    minutesUntil(date) {
        const now = new Date();
        const diff = date.getTime() - now.getTime();
        return Math.floor(diff / (1000 * 60));
    }

    hoursUntil(date) {
        const now = new Date();
        const diff = date.getTime() - now.getTime();
        return Math.floor(diff / (1000 * 60 * 60));
    }

    yearsUntil(date) {
        const now = new Date();
        const diff = date.getTime() - now.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    }

    daysUntil(date) {
        const now = new Date();
        const diff = date.getTime() - now.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
}
module.exports = time;