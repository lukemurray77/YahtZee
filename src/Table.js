import React from 'react';
import { connect } from 'react-redux';
import {ScoreNumbers, ThreeOfAKind, FourOfAKind, FullHouse, Yahtzee, Chance} from './reduxStuff/actions';

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
        <tfoot>
          <tr>
            <th><abbr title="Position">Total</abbr></th>
            <th>Player One Total</th>
            <th><abbr className='played' title="Played">Player One Total</abbr></th>

          </tr>
        </tfoot>
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
            <th>TOTAL</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.handleThree}>3 of a Kind</a></th>
            <td><b>{this.props.state.player1['3 of a kind']}</b></td>
            <td><b>{this.props.state.player2['3 of a kind']}</b></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.handleFour}>4 of a Kind</a></th>
            <td><b>{this.props.state.player1['4 of a kind']}</b></td>
            <td><b>{this.props.state.player2['4 of a kind']}</b></td>
          </tr>
          <tr>
            <th>4 run</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>5 run</th>
            <td></td
            >      <td></td>
            <td></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.fullHouse}>Full House</a></th>
            <td><b>{this.props.state.player1['full house']}</b></td>
            <td><b>{this.props.state.player2['full house']}</b></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.yahtzee}>Yahtzee</a></th>
            <td><b>{this.props.state.player1['Yahtzee']}</b></td>
            <td><b>{this.props.state.player2['Yahtzee']}</b></td>
          </tr>
          <tr>
            <th><a className='button' onClick={this.chance}>Chance</a></th>
            <td><b>{this.props.state.player1['Chance']}</b></td>
            <td><b>{this.props.state.player2['Chance']}</b></td>
          </tr>
          <tr>
            <th>Total</th>
            <td></td>
            <td></td>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);