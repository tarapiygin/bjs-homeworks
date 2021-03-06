'use strict'
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    };
    addClock(time, callback, id) {
        if (id === undefined) {
            return console.error(`Id parameter not passed to addClock method`);
        };
        if (this.alarmCollection.find((alarm) => (alarm.id === id))) {
            return console.error(`The queue already has a call with the parameter id = ${id}`);
        };
        const alarm = {
            id,
            time,
            callback
        };
        this.alarmCollection.unshift(alarm);
    };
    removeClock(id) {
        const alarmIndex = this.alarmCollection.findIndex(alarm => alarm.id === id);
        if (alarmIndex === -1) {
            return false;
        };
        this.alarmCollection.splice(alarmIndex, 1)
        return true;
    };
    getCurrentFormattedTime() {
        const currentDate = formattingTime(new Date);

        return currentDate;
    };
    start() {
        function checkClock(alarm) {
            const currentDate = formattingTime(new Date);

            if (alarm.time === currentDate) {
                const callback = alarm.callback
                return callback();
            };
        };
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    checkClock(alarm);
                });
            }, 10000);
        };
    };
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        };
    }
    printAlarms() {
        console.log(`Печать будильников в количестве ${this.alarmCollection.length} штук:`)
        this.alarmCollection.reverse().forEach(alarm => {
            console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`);
        });
    };
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
};
function formattingTime(date) {
    let formatMinutes;
    let formatHours;
    let formatTime;
    if (date.getMinutes() < 10) {
        formatMinutes = '0' + date.getMinutes();
    } else {
        formatMinutes = date.getMinutes();
    };
    if (date.getHours() < 10) {
        formatHours = '0' + date.getHours();

    } else {
        formatHours = date.getHours();
    }
    formatTime = formatHours + ':' + formatMinutes;
    return formatTime;
};
function testCase() {
    const alarm = new AlarmClock();
    try {
        alarm.addClock('13:00', () => console.log(0));
    } catch (error) {
        console.error(error);
    };
    let outputTime = alarm.getCurrentFormattedTime();
    alarm.addClock(outputTime, () => {
        console.log('Вывод будильника 1 - 1');
        console.log('Вывод будильника 1 - 2');
    }, 1);
    outputTime = outputTime.split(':');
    outputTime = outputTime[0] + ':' + (parseInt(outputTime[1]) + 1);
    alarm.addClock(outputTime, () => {
        console.log('\n');
        console.log('Вывод будильника 2');
        alarm.removeClock(2);
    }, 2);

    outputTime = outputTime.split(':');
    outputTime = outputTime[0] + ':' + (parseInt(outputTime[1]) + 2);

    alarm.addClock(outputTime, () => {
        console.log('\n');
        console.log('Вывод будильника 3');
        alarm.clearAlarms();
    }, 3);
    try {
        alarm.addClock(outputTime, () => {
            console.log('\n');
            console.log('Вывод будильника 3');
            alarm.clearAlarms();
        }, 3);
    } catch (error) {
        console.error(error);
    };
    alarm.printAlarms();
    alarm.start();
};
testCase();
