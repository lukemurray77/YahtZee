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
    let firstValue = arr[0];
    let secondValue;
    let firstValueCounter = 0;
    let secondValueCoutner = 0;
    arr.forEach(function (element) {
        if (element === arr[0]) {
            firstValueCounter++;
        }
        if (element !== arr[0]) {
            secondValue = element;
            secondValueCoutner++;
        }
        if (element === secondValue) {
            secondValueCoutner++;
        }
    });
    if (firstValueCounter === 3 || secondValueCoutner === 3) {
        return arr.reduce(function (acc, el) {
            acc += el;
            return acc;
        }, 0);
    }
    else return 0;
}

export function fourOfAKind(arr) {
    let firstValue = arr[0];
    let secondValue;
    let firstValueCounter = 0;
    let secondValueCoutner = 0;
    arr.forEach(function (element) {
        if (element === arr[0]) {
            firstValueCounter++;
        }
        if (element !== arr[0]) {
            secondValue = element;
            secondValueCoutner++;
        }
        if (element === secondValue) {
            secondValueCoutner++;
        }
    });
    if (firstValueCounter === 4 || secondValueCoutner === 4) {
        return arr.reduce(function (acc, el) {
            acc += el;
            return acc;
        }, 0);
    }
    else return 0;
}

export function fullHouse(arr) {
    let firstValue = arr[0];
    let secondValue;
    let firstValueCounter = 0;
    let secondValueCoutner = 0;
    arr.forEach(function (element) {
        if (element === arr[0]) {
            firstValueCounter++;
        }
        if (element !== arr[0]) {
            secondValue = element;
            secondValueCoutner++;
        }
        if (element === secondValue) {
            secondValueCoutner++;
        }
    });
    if (firstValueCounter + secondValueCoutner === 5) {
        return 25
    }
    else return 0;
}

export function lowStraight(arr) {
    return 30;
}

export function highStraight(arr) {
    return 40;
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

