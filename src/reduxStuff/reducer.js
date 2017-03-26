import * as types from './types';
import diceRoll from './helper';

const initialState = {
    dice: {
        1: {
            numberOnDice: 1,
            held: false
        },
        2: {
            numberOnDice: 1,
            held: false
        },
        3: {
            numberOnDice: 1,
            held: false
        },
        4: {
            numberOnDice: 1,
            held: false
        },
        5: {
            numberOnDice: 1,
            held: false
        }

    },
    player1: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        total: null,
        '3 of a kind': null,
        '4 of a kind': null,
        'full house': null,
        'low straight': null,
        'high straight': null,
        'Yahtzee': null,
        'Chance': null,
    },
    player2: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        total: null,
        '3 of a kind': null,
        '4 of a kind': null,
        'full house': null,
        'low straight': null,
        'high straight': null,
        'Yahtzee': null,
        'Chance': null,
    },
    currentPlayer: 'player1',
    currentDiceScore: []

};

function reducer (prevState = initialState, action) {
    switch (action.type) {
        case types.ROLL_DICE: {
            const newState = Object.assign({}, prevState);
            const newDice = Object.assign({}, prevState.dice);
            for (var key in newDice) {
                if (!newDice[key].held) {
                    newDice[key].numberOnDice = diceRoll(1, 7);
                }
            }
            return newState;
        }
        case types.HOLD_DICE: {
            const newState = Object.assign({}, prevState);
            const newDice = Object.assign({}, prevState.dice);
            newDice[action.whichDice].held = newDice[action.whichDice].held ? false : true;
            return newState;
        }
        default: {
            return prevState;
        }
    }
}

export default reducer;