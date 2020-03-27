"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = parseInt(percent) / 100;
    if (percent === NaN) {
        return 'Параметр percent содержит неправильное значение параметра ' + percent;
    };

    contribution = parseFloat(contribution);
    if (contribution === NaN) {
        return 'Параметр contribution содержит неправильное значение параметра ' + contribution;
    };

    amount = parseFloat(amount);
    if (amount === NaN) {
        return 'Параметр contribution содержит неправильное значение параметра ' + amount;
    };

    date = new Date(date);
    const currentDate = new Date();
    if (date < currentDate) {
        return 'Параметр date содержит неправильное значение параметра ' + date;
    };
    const termMonth = (date.getFullYear() - currentDate.getFullYear()) * 12 + (date.getMonth() - currentDate.getMonth());
    const s = amount - contribution; //тело кредита
    const p = percent / 12; // 1/12 процентной ставки (от 0 до 1)
    const monthlyPayment = s * (p + p / ((Math.pow((1 + p), termMonth) - 1)));
    let totalAmount = Math.round((monthlyPayment * termMonth) * 100) / 100;
    console.log(totalAmount)
    // код для задачи №1 писать здесь
    return totalAmount;
};

function getGreeting(name) {
    debugger;
    name = String(name);
    let result = '';
    if(name === '' || name === 'null' || name === 'undefined' ) {
        result = 'Аноним';
    }
    else {
        result = name;
    };
    const greeting = 'Привет, мир! Меня зовут ' + result;
    // код для задачи №2 писать здесь
    return greeting;
};