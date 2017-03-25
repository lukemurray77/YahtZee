import React from 'react';
const dice4 = require('./images/dice-4.png');
const dice5 = require('./images/dice-5.png');
const dice6 = require('./images/dice-6.png');
const dice2 = require('./images/two.png');
const dice1 = require('./images/one.png');
const dice3 = require('./images/three.png');

const Dice = React.createClass({
    render () {

        switch (this.props.number) {
            case 1: {
                return (
                    <div className='dice'>
                        {this.props.number}

                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <figure className="image is-4by3">
                                    <img src={dice1} />
                                </figure>
                            </article>
                        </div>
                    </div>
                );
            }
            case 2: {
                return (
                    <div className='dice'>
                        {this.props.number}

                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <figure className="image is-4by3">
                                    <img src={dice2} />
                                </figure>
                            </article>
                        </div>
                    </div>
                );
            }
            case 3: {
                return (
                    <div className='dice'>
                        {this.props.number}

                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <figure className="image is-4by3">
                                    <img src={dice3} />
                                </figure>
                            </article>
                        </div>
                    </div>
                );
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
                );
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
                );
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
                );
            }
        }

    }
});


export default Dice;