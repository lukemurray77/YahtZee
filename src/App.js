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
    return (
      <div className="App">
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
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
  
