import React from 'react';
const dice4 = require('./dice-4.png')
const dice5 = require('./dice-5.png')
const dice6 = require('./dice-6.png')


const Dice = React.createClass({
    render() {

        switch (this.props.number) {
            case 1: {
                return (
                    <div className='dice'>
                        {this.props.number}

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
            case 2: {
                return (
                    <div className='dice'>
                        {this.props.number}

                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <figure className="image is-4by3">
                                    <img src="http://www.pd4pic.com/images/dice-die-game-red-cube-two-2.png" />
                                </figure>
                            </article>
                        </div>
                    </div>
                )
            }
            case 3: {
                return (
                    <div className='dice'>
                        {this.props.number}

                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <figure className="image is-4by3">
                                    <img src="http://www.pd4pic.com/images/dice-die-game-red-cube-3-three.png" />
                                </figure>
                            </article>
                        </div>
                    </div>
                )
            }
            case 4: {
                return (
                    <div className='dice'>
                        {this.props.number}

                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <figure className="image is-4by3">
                                    <img src={dice4} />
                                </figure>
                            </article>
                        </div>
                    </div>
                )
            }
            case 5: {
                return (
                    <div className='dice'>
                        {this.props.number}

                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <figure className="image is-4by3">
                                    <img src={dice5} />
                                </figure>
                            </article>
                        </div>
                    </div>
                )
            }
            case 6: {
                return (
                    <div className='dice'>
                        {this.props.number}

                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <figure className="image is-4by3">
                                    <img src={dice6} />
                                </figure>
                            </article>
                        </div>
                    </div>
                )
            }
        }

    }
})



export default Dice;