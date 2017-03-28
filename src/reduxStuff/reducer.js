import * as types from './types';
import { diceRoll, calculateScore, threeOfAKind, fourOfAKind, fullHouse, Yahtzee, chance, highStraight, lowStraight, addTotal } from './helper';

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
        overallTotal: null
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
        overallTotal: null
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
            if (prevState[prevState.currentPlayer][action.number] === null) {
                const newState = Object.assign({}, prevState);
                const newPlayerScore = Object.assign({}, newState[newState.currentPlayer]);
                switch (action.number) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6: 
                    newPlayerScore[action.number] = calculateScore(newState.currentDiceScore, action.number);
                    break;
                    case '3 of a kind': 
                    newPlayerScore['3 of a kind'] = threeOfAKind(newState.currentDiceScore);
                    break;
                    case '4 of a kind': 
                    newPlayerScore['4 of a kind'] = fourOfAKind(newState.currentDiceScore);
                    break;
                    case 'full house': 
                    newPlayerScore['full house'] = fullHouse(newState.currentDiceScore);
                    break;
                    case 'Yahtzee': 
                    newPlayerScore['Yahtzee'] = Yahtzee(newState.currentDiceScore);
                    break;
                    case 'Chance': 
                    newPlayerScore['Chance'] = chance(newState.currentDiceScore);
                    break;
                    case 'low straight': 
                    newPlayerScore['low straight'] = lowStraight(newState.currentDiceScore);
                    break;
                    case 'high straight': 
                    newPlayerScore['high straight'] = highStraight(newState.currentDiceScore);
                    break;

                }
                
                newState[newState.currentPlayer] = newPlayerScore;
                newPlayerScore.overallTotal = addTotal(newState[newState.currentPlayer]);
                newState.currentPlayer = newState.currentPlayer === 'player1' ? 'player2' : 'player1';
                newState.rollNumber = 0;
                const newDice = Object.assign({}, newState.dice);
                for (var key in newDice) {
                    newDice[key].held = false;
                }
                newState.dice = newDice;
                return newState;

            } else return prevState;
        }


        default: {
            return prevState;
        }
    }
}

export default reducer;