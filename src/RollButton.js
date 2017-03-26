import React from 'react';
import { connect } from 'react-redux';
import { RollDice } from './reduxStuff/actions';

const RollButton = React.createClass({
    render() {
        return (
            <div>
            <a className='button is-danger rollButton'  onClick={this.handleClick}> ROLL </a>
            </div>
        )
    },
    handleClick: function () {
        
        this.props.rollDice();
    }
})

function mapDispatchToProps (dispatch) {
    return {
        rollDice: () => {
            dispatch(RollDice())
        }
    }
}

export default connect(null, mapDispatchToProps)(RollButton);