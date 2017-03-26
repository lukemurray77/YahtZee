import React from 'react';
import { connect } from 'react-redux';
import {ScoreNumbers} from './reduxStuff/actions';

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
            <th>3 of a kind</th>
            <td></td>
            <td></td>

            <td></td>
          </tr>
          <tr>
            <th>4 of a kind</th>
            <td></td>
            <td></td>
            <td></td>
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
            <th>FULL HOUSE</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Yatzee</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Chance</th>
            <td></td>
            <td></td>
            <td></td>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);