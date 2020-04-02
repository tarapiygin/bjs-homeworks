"use strict";
//Task 1
function getSolutions(a, b, c) {
    const D = b * b - 4 * a * c;
    const roots = [];
    if (D === 0) {
        const x1 = -b / (2 * a);
        roots.push(x1);
    } else if (D > 0) {
        let l = Math.sqrt(D);
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        roots.push(x1, x2)
    };
    return {
        D,
        roots
    };
};


function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a = parseFloat(a), b = parseFloat(b), c = parseFloat(c));
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ ${result.roots[1]}`);
    } else {
        console.log(`Уравнение не имеет вещественных корней`);
    };
};

//Task 2
function getAverageMark(marks) {
    if (marks.length > 0) {
        return marks.reduce((sum, mark) => (sum + mark), 0) / marks.length;
    } else {
        return 0;
    };

};


function getAverageScore(data) {
    let result = new Object();
    result.average = 0;
    if (Object.keys(data).length > 0) {
        let count = 0;
        for (let marks in data) {
            result[marks] = getAverageMark(data[marks]);
            result.average += result[marks];
            count++;
        };
        result.average = result.average / count;
    };
    return result;
};

//Task 3
function getDecodedValue(secret) {  
    return (secret === 0) ? 'Родриго' : 'Эмильо';
};

function getPersonData(secretData) {
    debugger;
    const result = {
        firstName: getDecodedValue(secretData['aaa']),
        lastName: getDecodedValue(secretData['bbb'])
    };
    return result;
};