import React, { Component } from 'react';
import Dice from './Dice';
import Table from './Table';
import RollButton from './RollButton';
import './css/App.css';
import './css/dice.css';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { map } from 'underscore';

class App extends Component {
  render() {
    const mapped = map(this.props.dice.dice, function (dice, ind) {
      return <Dice
        whichDice={ind}
        number={dice.numberOnDice}
        held={dice.held}
      />
    });
    return (
      <div className="App">
        {mapped}
        <RollButton />
        <Table />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    dice: state,
  }
}

export default connect(mapStateToProps)(App);

