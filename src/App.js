import React, { Component } from 'react';
import logo from './logo.svg';
import Dice from './Dice';
import Table from './Table';
import RollButton from './RollButton';
import './App.css';
import './dice.css';
import 'bulma/css/bulma.css';


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

export default App;


function createRandomNumber(max, min) {
   return Math.floor(Math.random() * (max - min)) + min;
}

  
