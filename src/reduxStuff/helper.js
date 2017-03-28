import _ from 'underscore';

export function diceRoll(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function calculateScore(arr, number) {
    return arr.reduce(function (acc, el) {
        if (el === number) {
            acc += el;
        }
        return acc;
    }, 0);
}

export function threeOfAKind(arr) {
    let reducedArr = arr.reduce(function (acc, el) {
        if (acc.hasOwnProperty(el)) {
            acc[el]++;
        }
        else (acc[el] = 1);
        return acc;
    }, {});
    for (var key in reducedArr) {
        if (reducedArr[key] === 3) {
            return arr.reduce(function (acc, el) {
                acc += el;
                return acc;
            }, 0);
        }
    }
    return 0;
}

export function fourOfAKind(arr) {
    let reducedArr = arr.reduce(function (acc, el) {
        if (acc.hasOwnProperty(el)) {
            acc[el]++;
        }
        else (acc[el] = 1);
        return acc;
    }, {});
    for (var key in reducedArr) {
        if (reducedArr[key] === 4) {
            console.log(reducedArr[key]);
            return arr.reduce(function (acc, el) {
                acc += el;
                return acc;
            }, 0);
        }
    }
    return 0;
}

export function fullHouse(arr) {
    let reducedArr = arr.reduce(function (acc, el) {
        if (acc.hasOwnProperty('el')) {
            acc[el]++;
        }
        else (acc[el] = 0);
        return acc;
    }, {});
    if (Object.keys(reducedArr).length === 2) return 25;
    else return 0;
}

export function lowStraight(arr) {
    arr.sort();
    let counter = 0;
    for (var i = 1; i < arr.length; i++) {
        if ((arr[i - 1]) + 1 === arr[i]) {
            counter++;
        }
    }
    if (counter > 2) {
        return 30;
    }
    else return 0;
}

export function highStraight(arr) {
    arr.sort();
    let counter = 0;
    for (var i = 1; i < arr.length; i++) {
        if ((arr[i - 1]) + 1 === arr[i]) {
            counter++;
        }
    }
    if (counter === 4) {
        return 40;
    }
    else return 0;
}

export function Yahtzee(arr) {
    if (_.every(arr, function (el) {
        return (el === arr[0]);
    })) return 50;
    else return 0;
}

export function chance(arr) {
    return arr.reduce(function (acc, el) {
        acc += el;
        return acc;
    }, 0);
}

export function addTotal(obj) {
    let counter = 0;
    for (var key in obj) {
        if (obj[key] === null && key !== 'total' && key !== 'overallTotal') return 0;
        if (key !== 'total' && key !== 'overallTotal') {
            counter += obj[key];
        }
    }
    return counter
}