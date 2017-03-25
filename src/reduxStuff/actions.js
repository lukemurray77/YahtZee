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