function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
};

function sum(...args) {
    //Время работы при 100000000 итераций цикла 9980.4560546875ms
    // Замедление на половину секунды.
    // sleep(10); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
};

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((number, i) => number === arr2[i]);
}

function memorize(fn, limit = 10) {
    //Время работы при 100000000 итераций цикла 12512.81298828125ms
    const memory = [];
    function buffering(...args) {
        let memoryObj = memory.find((obj) => {
            compareArrays(obj['args'], args);
        });
        if (memoryObj !== undefined) {
            return memoryObj['result'];
        };
        memoryObj = {
            args: args,
            result: fn(...args),
        };

        memory.unshift(memoryObj);
        if (memory.length > limit) {
            memory.pop();
        };
        return memoryObj['result'];
    };
    return buffering;
};


function testCase(testFunction, timerID) {
    args = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];

    console.time(timerID);
    let i = 0;
    while (i < 100000000) {
        args.forEach(element => {
            testFunction(...element);
        });
        i++;
    };
    console.timeEnd(timerID);
};