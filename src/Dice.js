import React from 'react';
const dice4 = require('./images/dice-4.png');
const dice5 = require('./images/dice-5.png');
const dice6 = require('./images/dice-6.png');
const dice2 = require('./images/two.png');
const dice1 = require('./images/one.png');
const dice3 = require('./images/three.png');
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

const Dice = React.createClass({
    render () {
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
        console.log(this.key)
        this.props.holdDice(this.key);
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