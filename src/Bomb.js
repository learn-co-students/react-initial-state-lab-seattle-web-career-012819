import React, { Component } from 'react';
// import initialCount from './index.js'

export default class Bomb extends Component {
 constructor(props) {
   super(props)
   this.state = {
     secondsLeft: this.props.initialCount
   }
 }

  render() {
    return (
      this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    )
  }
}
