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
    console.log(this.props.dice)
    return (
      <div className="App">
        <Dice number={this.props.dice.dice[1].numberOnDice}/>
        <Dice number={this.props.dice.dice[2].numberOnDice}/>
        <Dice number={this.props.dice.dice[3].numberOnDice}/>
        <Dice number={this.props.dice.dice[4].numberOnDice}/>
        <Dice number={this.props.dice.dice[5].numberOnDice}/>
        <RollButton />
        <Table />
      </div>
      
    );
  }
}

function mapStateToProps (state) {
  return {
    dice: state
  }
}

export default connect(mapStateToProps)(App);
  
