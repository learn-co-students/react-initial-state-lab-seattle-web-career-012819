import React, { Component } from 'react';

export default class Bomb extends React.Component {
    constructor(initialCount) {
        console.log(initialCount)
        super()
        this.state = {
            secondsLeft: initialCount.initialCount
        }
    }
    render() {
        return (
            <div>
                {this.state.secondsLeft != 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}
            </div>
        )

    }
}
