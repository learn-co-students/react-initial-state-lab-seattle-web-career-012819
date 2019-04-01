import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    let text = "Boom!"
    if (this.state.secondsLeft > 0) {
      text = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    return (
      <p>{text}</p>
    )
  }
}