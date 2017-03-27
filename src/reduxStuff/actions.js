import * as types from './types';

export function RollDice() {
    return {
        type: types.ROLL_DICE
    }
}

export function HoldDice(key) {
    return {
        type: types.HOLD_DICE,
        whichDice: key
    }
}

export function ScoreNumbers(number) {
    return {
        type: types.SCORE_NUMBERS,
        number: number
    }
}

export function ThreeOfAKind() {
    return {
        type: types.SCORE_3OFAKIND
    }
}

export function FourOfAKind () {
    return {
        type: types.SCORE_4OFAKIND
    }
}

export function FullHouse () {
    return {
        type: types.SCORE_FULLHOUSE
    }
}

export function Yahtzee () {
    return {
        type: types.SCORE_YAHTZEE
    }
}

export function Chance () {
    return {
        type: types.SCORE_CHANCE
    }
}