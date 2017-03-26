
export function diceRoll(max, min) {
   return Math.floor(Math.random() * (max - min)) + min;
}

export function calculateScore (arr, number) {
    return arr.reduce(function (acc, el) {
        if (el === number) {
            acc+= el;
        }
        return acc;
    }, 0);
}

