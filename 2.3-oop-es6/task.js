'use strict'
class Weapon {
    constructor(args) {
        this.name = args['name'];
        this.attack = args['attack'];
        this.durability = args['durability'];
        this.maxDurability = args['durability'];
        this.range = args['range'];
    };
    takeDamage(damage) {
        if (this.durability - damage >= 0) {
            this.durability = this.durability - damage;
        } else {
            this.durability = 0;
        };
    };
    getDamage() {
        if (this.durability >= (this.maxDurability * 0.3)) {
            return this.attack;
        } else if (this.durability > 0) {
            return this.attack / 2;
        } else {
            return 0;
        };
    };
    isBroken() {
        return (this.durability > 0) ? false : true;
    };
};

class Arm extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
        });
    };
};
class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        });
    };
};
class Sword extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        });

    };
};
class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        });

    };
};
class Staff extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        });

    };
};

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    };
};

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    };
};

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    };
};
class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    };
    getName() {
        return this.name;
    };
    addGrade(grade, subject) {
        let quantityGrades = 0;
        if (isNaN(grade) || grade < 1 || grade > 5) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
        } else if (subject in this.grades) {
            this.grades[subject].push(parseInt(grade));

        } else {
            this.grades[subject] = [parseInt(grade)];

        };
        if (subject in this.grades) {
            quantityGrades = this.grades[subject].length;
        };
        return quantityGrades;
    };
    getAverageBySubject(subject) {
        let gradesSum = 0;
        if (subject in this.grades) {
            gradesSum += this.grades[subject].reduce((sum, mark) => (sum + mark), 0) / this.grades[subject].length;
        };
        return gradesSum;
    };
    getTotalAverage() {
        let quantitySubj = 0;
        let gradesSum = 0;
        let result = 0;
        for (let subject in this.grades) {
            gradesSum += this.getAverageBySubject(subject);
            quantitySubj++;
        };
        if (quantitySubj > 0) {
            result = gradesSum / quantitySubj;
        };
        return result;
    };
}

//tests
// debugger;
// const bow = new Bow();
// console.log(bow.name); // Лук
// console.log(bow.attack); // 10
// console.log(bow.durability); // 200
// console.log(bow.range); // 3

// const axe = new Axe();
// console.log(axe.name); // Секира
// console.log(axe.attack); // 27
// console.log(axe.durability); // 800
// console.log(axe.range); // 3