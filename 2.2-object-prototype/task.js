"use strict"
function getAnimalSound(animal) {
    if(typeof animal === 'undefined'){
        return null;
    };
    const animalSound = animal.sound
    return animalSound;
}

function getAverageMark(marks) {
    let roundedAverage = 0;
    if (marks.length > 0) {
        const averageMark = marks.reduce((sum, mark) => (sum + mark), 0) / marks.length;
        roundedAverage = Math.round(averageMark);
    };
    return roundedAverage;
}

function checkBirthday(birthday) {
    const currentDate = new Date;
    const userDate = new Date(dateOfBirthday);
    //Дата дня рождения в текущем году
    const currentBirthday = new Date(currentDate.getFullYear(), userDate.getMonth(),userDate.getDate());
    let userAge = currentDate.getFullYear() - userDate.getFullYear();

    //Если ДР в этом году еще небыло, то отнимаем 1 полный год
    if(currentDate < currentBirthday){
        userAge = userAge - 1;
    };
    let verdict = (userAge >= 18);
    return verdict;
}