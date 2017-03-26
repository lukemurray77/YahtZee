import React from 'react';

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
            <th>1</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>2</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>3</th>
            <td></td>
            <td></td>

          </tr>
          <tr>
            <th>4</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>5</th>
            <td></td>
            <td></td>

          </tr>
          <tr>
            <th>6</th>
            <td></td>
            <td></td>

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
  }
})




export default Table;