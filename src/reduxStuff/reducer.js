import * as types from './types';
import { diceRoll, calculateScore, threeOfAKind, fourOfAKind, fullHouse, Yahtzee } from './helper';

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
    currentDiceScore: [],
    rollNumber: 0
};

function reducer(prevState = initialState, action) {
    switch (action.type) {
        case types.ROLL_DICE: {
            const newState = Object.assign({}, prevState);
            const newDice = Object.assign({}, prevState.dice);
            const newDiceScore = [];
            for (var key in newDice) {
                if (!newDice[key].held && newState.rollNumber < 3) {
                    newDice[key].numberOnDice = diceRoll(1, 7);
                }
                newDiceScore.push(newDice[key].numberOnDice);
            }
            newState.rollNumber++;
            newState.currentDiceScore = newDiceScore;
            return newState;
        }
        case types.HOLD_DICE: {
            const newState = Object.assign({}, prevState);
            const newDice = Object.assign({}, prevState.dice);
            newDice[action.whichDice].held = newDice[action.whichDice].held ? false : true;
            return newState;
        }
        case types.SCORE_NUMBERS: {
            const newState = Object.assign({}, prevState);
            const newPlayerScore = Object.assign({}, newState[newState.currentPlayer]);
            newPlayerScore[action.number] = calculateScore(newState.currentDiceScore, action.number);
            newState[newState.currentPlayer] = newPlayerScore;
            newState.currentPlayer = newState.currentPlayer === 'player1' ? 'player2' : 'player1';
            newState.rollNumber = 0;
            const newDice = Object.assign({}, newState.dice);
            for (var key in newDice) {
                newDice[key].held = false;
            }
            newState.dice = newDice;
            return newState;
        }
            case types.SCORE_3OFAKIND: {
            const newState = Object.assign({}, prevState);
            const newPlayerScore = Object.assign({}, newState[newState.currentPlayer]);
            newPlayerScore['3 of a kind'] = threeOfAKind(newState.currentDiceScore);
            newState[newState.currentPlayer] = newPlayerScore;
            newState.currentPlayer = newState.currentPlayer === 'player1' ? 'player2' : 'player1';
            newState.rollNumber = 0;
            const newDice = Object.assign({}, newState.dice);
            for (var key in newDice) {
                newDice[key].held = false;
            }
            newState.dice = newDice;
            return newState;
        }
                    case types.SCORE_4OFAKIND: {
            const newState = Object.assign({}, prevState);
            const newPlayerScore = Object.assign({}, newState[newState.currentPlayer]);
            newPlayerScore['4 of a kind'] = fourOfAKind(newState.currentDiceScore);
            newState[newState.currentPlayer] = newPlayerScore;
            newState.currentPlayer = newState.currentPlayer === 'player1' ? 'player2' : 'player1';
            newState.rollNumber = 0;
            const newDice = Object.assign({}, newState.dice);
            for (var key in newDice) {
                newDice[key].held = false;
            }
            newState.dice = newDice;
            return newState;
        }
                    case types.SCORE_FULLHOUSE: {
            const newState = Object.assign({}, prevState);
            const newPlayerScore = Object.assign({}, newState[newState.currentPlayer]);
            newPlayerScore['full house'] = fullHouse(newState.currentDiceScore);
            newState[newState.currentPlayer] = newPlayerScore;
            newState.currentPlayer = newState.currentPlayer === 'player1' ? 'player2' : 'player1';
            newState.rollNumber = 0;
            const newDice = Object.assign({}, newState.dice);
            for (var key in newDice) {
                newDice[key].held = false;
            }
            newState.dice = newDice;
            return newState;
        }
                    case types.SCORE_YAHTZEE: {
            const newState = Object.assign({}, prevState);
            const newPlayerScore = Object.assign({}, newState[newState.currentPlayer]);
            newPlayerScore['Yahtzee'] = Yahtzee(newState.currentDiceScore);
            newState[newState.currentPlayer] = newPlayerScore;
            newState.currentPlayer = newState.currentPlayer === 'player1' ? 'player2' : 'player1';
            newState.rollNumber = 0;
            const newDice = Object.assign({}, newState.dice);
            for (var key in newDice) {
                newDice[key].held = false;
            }
            newState.dice = newDice;
            return newState;
        }
        default: {
            return prevState;
        }
    }
}

export default reducer;