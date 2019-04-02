import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  countdown() {
    {this.setState({
    secondsLeft: this.state.secondsLeft-1
  })
}}

  render() {


    const alert = (this.state.secondsLeft > 0) ?
                  `${this.state.secondsLeft} seconds left before I go boom!`  : `Boom!`
    return(
      <div classname="alert">
      {alert}
      </div>
    )
  }
}


export default Bomb
