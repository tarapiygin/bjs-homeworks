"use strict";
function getResult(a, b, c) {
    const d = parseFloat(b*b - 4 * a * c);
    const result = [];
    if (d > 0) {
        result[0] = (-b + Math.sqrt(d)) / 2 * a;
        result[1] = (-b - Math.sqrt(d)) / 2 * a;
    } else if (d === 0) {
        result[0] = -b / 2 * a;
    };
    return result;
};

function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length > 5) {
        console.log('Длина массива: ', marks.length);
        marks = marks.slice(0, 5);
    };
    if (marks.length > 0) {
        for (let mark of marks) {
            averageMark += mark;
        }
        averageMark = averageMark / marks.length;
    };
    return averageMark;
};

function askDrink(name, dateOfBirthday) {
    const currentDate = new Date;
    const userDate = new Date(dateOfBirthday);
    //Дата дня рождения в текущем году
    const currentBirthday = new Date(currentDate.getFullYear(), userDate.getMonth(),userDate.getDate());
    let userAge = currentDate.getFullYear() - userDate.getFullYear();

    //Если ДР в этом году еще небыло, то отнимаем 1 полный год
    if(currentDate < currentBirthday){
        userAge = userAge - 1;
    };
    //Если ввели пустое имя
    if (name == ''){
        name = 'друг';
    };
    let result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    if (userAge >= 18){
       result = 'Не желаете ли олд-фэшн, ' + name + '?';
    };

    return result;
};