import React, { Component } from 'react';
import logo from './logo.svg';
import Dice from './Dice';
import Table from './Table';
import RollButton from './RollButton';
import './App.css';
import './dice.css';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { map } from 'underscore';

class App extends Component {
  render() {
    console.log("EEKJBR", this.props.dice)
    var newDice = map(this.props.dice, function (dice, index) {
      return <Dice diceNumber={dice.numberOnDice} key={index}/>
    })
    return (
      <div className="App">
        {newDice}
        <RollButton />
        <Table />
      </div>
      
    );
  }
}

function mapStateToProps (state) {
  return {
    dice: state.dice
  }
}

export default connect(mapStateToProps)(App);
  
