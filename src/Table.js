import React from 'react';
import { connect } from 'react-redux';
import {ScoreNumbers, ThreeOfAKind, FourOfAKind, FullHouse, Yahtzee, Chance, LowStraight, HighStraight} from './reduxStuff/actions';

const Table = React.createClass({
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th><abbr className='title' title="Position">Round</abbr></th>
            <th className='played'>Player 1</th>
            <th><abbr className='played' title="Played">Player 2</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><a className='button' onClick={this.handleClick.bind(null, 1)}>1</a></th>
            <td><b>{this.props.state.player1[1]}</b></td>
            <td><b>{this.props.state.player2[1]}</b></td>
          </tr>
          <tr>
<th><a className='button' onClick={this.handleClick.bind(null, 2)}>2</a></th>
            <td><b>{this.props.state.player1[2]}</b></td>
            <td><b>{this.props.state.player2[2]}</b></td>
          </tr>
          <tr>
<th><a className='button' onClick={this.handleClick.bind(null, 3)}>3</a></th>
            <td><b>{this.props.state.player1[3]}</b></td>
            <td><b>{this.props.state.player2[3]}</b></td>

          </tr>
          <tr>
<th><a className='button' onClick={this.handleClick.bind(null, 4)}>4</a></th>
            <td><b>{this.props.state.player1[4]}</b></td>
            <td><b>{this.props.state.player2[4]}</b></td>
          </tr>
          <tr>
<th><a className='button' onClick={this.handleClick.bind(null, 5)}>5</a></th>
            <td><b>{this.props.state.player1[5]}</b></td>
            <td><b>{this.props.state.player2[5]}</b></td>
          </tr>
          <tr>
<th><a className='button' onClick={this.handleClick.bind(null, 6)}>6</a></th>
            <td><b>{this.props.state.player1[6]}</b></td>
            <td><b>{this.props.state.player2[6]}</b></td>

          </tr>
          <tr>
            <th>Numbers Total</th>
            <td>{this.props.state.player1.total}</td>
            <td>{this.props.state.player2.total}</td>
            <td></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.handleClick.bind(null, '3 of a kind')}>3 of a Kind</a></th>
            <td><b>{this.props.state.player1['3 of a kind']}</b></td>
            <td><b>{this.props.state.player2['3 of a kind']}</b></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.handleClick.bind(null, '4 of a kind')}>4 of a Kind</a></th>
            <td><b>{this.props.state.player1['4 of a kind']}</b></td>
            <td><b>{this.props.state.player2['4 of a kind']}</b></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.handleClick.bind(null, 'low straight')}>Low Straight</a></th>
            <td><b>{this.props.state.player1['low straight']}</b></td>
            <td><b>{this.props.state.player2['low straight']}</b></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.handleClick.bind(null, 'high straight')}>High Straight</a></th>
            <td><b>{this.props.state.player1['high straight']}</b></td>
            <td><b>{this.props.state.player2['high straight']}</b></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.handleClick.bind(null, 'full house')}>Full House</a></th>
            <td><b>{this.props.state.player1['full house']}</b></td>
            <td><b>{this.props.state.player2['full house']}</b></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.handleClick.bind(null, 'Yahtzee')}>Yahtzee</a></th>
            <td><b>{this.props.state.player1['Yahtzee']}</b></td>
            <td><b>{this.props.state.player2['Yahtzee']}</b></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.handleClick.bind(null, 'Chance')}>Chance</a></th>
            <td><b>{this.props.state.player1['Chance']}</b></td>
            <td><b>{this.props.state.player2['Chance']}</b></td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{this.props.state.player1.overallTotal}</td>
            <td>{this.props.state.player2.overallTotal}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  },
  handleClick: function (num) {
    this.props.scoreNumbers(num);
  },
  handleThree: function () {
    this.props.threeOfAKind();
  },
  handleFour: function () {
    this.props.fourOfAKind();
  },
  fullHouse: function () {
    this.props.fullHouse();
  },
  yahtzee: function () {
    this.props.yahtzee();
  },
  chance: function () {
    this.props.chance();
  },
  lowStraight: function() {
    this.props.lowStraight();
  },
  highStraight: function () {
    this.props.highStraight();
  },
  numbersTotal: function () {

  }
})

function mapStateToProps (state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    scoreNumbers: (num) => {
      dispatch(ScoreNumbers(num));
    },
    threeOfAKind: () => {
      dispatch(ThreeOfAKind());
    },
    fourOfAKind: () => {
      dispatch(FourOfAKind());
    },
    fullHouse: () => {
      dispatch(FullHouse());
    },
    yahtzee: () => {
      dispatch(Yahtzee());
    },
    chance: () => {
      dispatch(Chance());
    },
    lowStraight: () => {
      dispatch(LowStraight());
    },
    highStraight: () => {
      dispatch(HighStraight());
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);