import React from 'react';
const dice4 = require('./images/dice-4.png');
const dice5 = require('./images/dice-5.png');
const dice6 = require('./images/dice-6.png');
const dice2 = require('./images/two.png');
const dice1 = require('./images/one.png');
const dice3 = require('./images/three.png');

const diceHeld4 = require('./images/heldDice-4.png');
const diceHeld5 = require('./images/heldDice-5.png');
const diceHeld6 = require('./images/heldDice-6.png');
const diceHeld2 = require('./images/heldTwo.png');
const diceHeld1 = require('./images/heldDice-1.png');
const diceHeld3 = require('./images/heldThree.png');
import {HoldDice} from './reduxStuff/actions';
import {connect} from 'react-redux';

const imageToRender = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
};
const imageToRenderIfHeld = {
    1: diceHeld1,
    2: diceHeld2,
    3: diceHeld3,
    4: diceHeld4,
    5: diceHeld5,
    6: diceHeld6,
};

const Dice = React.createClass({

    render () {
        if(this.props.held) {
            return (
                <div className='dice heldTrue' onClick={this.handleClick}>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                        <figure className="image is-4by3">
                            <img src={imageToRenderIfHeld[this.props.number]} />
                        </figure>
                    </article>
                </div>
            </div>
            )
        }
        return (
            <div className='dice' onClick={this.handleClick}>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                        <figure className="image is-4by3">
                            <img src={imageToRender[this.props.number]} />
                        </figure>
                    </article>
                </div>
            </div>
        );
    

    },
    handleClick() {
        console.log(this.props.whichDice)
        this.props.holdDice(this.props.whichDice);
    }
});


function mapDispatchToProps (dispatch) {
    return {
        holdDice : (key) => {
            dispatch(HoldDice(key))
        }
    }
}

export default connect(null, mapDispatchToProps)(Dice);