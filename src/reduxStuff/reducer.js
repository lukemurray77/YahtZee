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

    }
};

function reducer (prevState = initialState, action) {
    switch (action.type) {
        case types.ROLL_DICE: {
            const newState = Object.assign({}, prevState);
            const newDice = Object.assign({}, prevState.dice);
            for (var key in newDice) {
                if (!key.held) {
                    newDice[key].numberOnDice = diceRoll(1, 7);
                }
            }
            return newState;
        }
        case types.HOLD_DICE: {
            const newState = Object.assign({}, prevState);
            const newDice = Object.assign({}, prevState.dice);
            console.log(newDice[action.whichDice])
            newDice[action.whichDice].held = newDice[action.whichDice].held ? false : true;
            return newState;
        }
        default: {
            return prevState;
        }
    }
}

export default reducer;