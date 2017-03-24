import React from 'react';

const Dice = React.createClass({
    render() {
        return (
            <div className='dice'>

            <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                    <figure className="image is-4by3">
                        <img src="http://www.pd4pic.com/images/dice-die-game-red-one-1.png" />
                    </figure>
                </article>
            </div>
            </div>
        )
    }
})



export default Dice;