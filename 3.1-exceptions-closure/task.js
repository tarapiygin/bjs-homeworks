"use strict"

function parseCount(str) {
    const numb = parseInt(str);
    if (isNaN(numb)) {
        throw new Error('Невалидное значение');
    };
    return numb;
};

function validateCount(str) {
    try {
        let count = parseCount(str);
        return count;
    } catch (e) {
        return e;
    };
};

function getTriangle(a, b, c) {
    let triangle;
    try {
        debugger;
        triangle = new Triangle(a, b, c);
        return triangle;
    } catch (e) {
        const obj = {
            getPerimeter() {
                return 'Ошибка! Неправильный треугольник';
            },
            getArea() {
                return 'Ошибка! Неправильный треугольник';
            }
        };
        return obj;
    };
};

class Triangle {
    constructor(a, b, c) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.c = parseFloat(c);
        if (!(this.a < this.b + this.c && this.b < this.a + this.c && this.c < this.a + this.b)) {
            throw new Error('Треугольник с такими сторонами не существует');
        };
    };
    getPerimeter() {
        return this.a + this.b + this.c;
    };
    getArea() {
        const p = this.getPerimeter() / 2;
        const s = Math.round((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))) * 1000) / 1000;
        return s;
    };
};