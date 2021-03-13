class TimeYT {
    constructor(hour, minute, second) {
        if (hour instanceof Date) {
            this.hour = hour.getHours();
            this.minute = hour.getMinutes();
            this.second = hour.getSeconds();
        } else {
            this.hour = hour | 0;
            this.minute = minute | 0;
            this.second = second | 0;
        }

        if ((this.hour < 0 | this.hour > 23)
            | (this.minute < 0 | this.minute > 59)
            | (this.second < 0 | this.second > 59)) {
            throw "Invalid value";
        }
    }

    static getTimeSum = (timeObj1, timeObj2) => {
        let hour = timeObj1.hour + timeObj2.hour;
        let minute = timeObj1.minute + timeObj2.minute;
        let second = timeObj1.second + timeObj2.second;
        if (second > 59) {
            minute++;
            second = second - 60;
        }
        if (minute > 59) {
            hour++;
            minute = minute - 60;
        }
        if (hour > 23) {
            hour = hour - 24;
        }
        return new TimeYT(hour, minute, second);
    }

    static getTimeDif = (timeObj1, timeObj2) => {
        let hour = timeObj1.hour - timeObj2.hour;
        let minute = timeObj1.minute - timeObj2.minute;
        let second = timeObj1.second - timeObj2.second;
        if (second < 0){
            minute--;
            second = 60 + second;
        }
        if (minute < 0){
            hour--;
            minute = 60 + minute;
        }
        if (hour < 0) {
            hour = 24 + hour;
        }
        return new TimeYT(hour, minute, second);
    }

    getTime = () => {
        let hours, ZZ;
        if (this.hour < 12) {
            hours = this.hour == 0 ? 12 : this.hour;
            ZZ = 'AM';
        } else {
            hours = this.hour == 12 ? this.hour : this.hour-12;
            ZZ = 'PM';
        }
        return `${hours}:${this.minute}:${this.second}:${ZZ}`;
    }

    getSum = (timeObj) => {
        let hour = this.hour + timeObj.hour;
        let minute = this.minute + timeObj.minute;
        let second = this.second + timeObj.second;
        if (second > 59) {
            minute++;
            second = second - 60;
        }
        if (minute > 59) {
            hour++;
            minute = minute - 60;
        }
        if (hour > 23) {
            hour = hour - 24;
        }
        return new TimeYT(hour, minute, second);
    }

    getDif = (timeObj) => {
        let hour = this.hour - timeObj.hour;
        let minute = this.minute - timeObj.minute;
        let second = this.second - timeObj.second;
        if (second < 0){
            minute--;
            second = 60 + second;
        }
        if (minute < 0){
            hour--;
            minute = 60 + minute;
        }
        if (hour < 0) {
            hour = 24 + hour;
        }
        return new TimeYT(hour, minute, second);
    }
}

let test1 = new TimeYT(12, 42,5);
console.log(test1.getTime());

const date1 = new Date('December 17, 1995 09:24:00');
let test2 = new TimeYT(date1);
console.log(test2.getTime());

console.log(test1.getSum(test2).getTime());
console.log(test1.getDif(test2).getTime());

let test3 = new TimeYT(0, 0, 0);
let test4 = new TimeYT(0, 0, 1);
console.log(TimeYT.getTimeDif(test3, test4).getTime());

let test5 = new TimeYT(23, 59, 59);
let test6 = new TimeYT(12, 0, 1);
console.log(TimeYT.getTimeSum(test5, test6).getTime());