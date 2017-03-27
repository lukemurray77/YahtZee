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


//[5, 5, 5, 2, 2]
export function threeOfAKind(arr) {
    // this function only needs to check that the array does contain three of a kind (then it returns the entire dice score)
    return arr.reduce(function (acc, el) {
        acc += el;
        return acc;
    }, 0);
}

export function fourOfAKind(arr) {
    // similarly check 4 of a kind
    return arr.reduce(function (acc, el) {
        acc += el;
        return acc;
    }, 0);
}

//[5, 5, 5, 2, 2]
export function fullHouse(arr) {
    return 25;
}

export function lowStraight(arr) {
    return 30;
}

export function highStraight(arr) {
    return 40;
}

export function Yahtzee(arr) {
    
    if (_.every(arr, function (el) {
        return (el===arr[0]);
    })) return 50;
    else return 0;
}

export function chance(arr) {
    return arr.reduce(function (acc, el) {
        acc += el;
        return acc;
    }, 0);
}

