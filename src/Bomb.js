import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    this.setState({
      secondsLeft: this.state.secondsLeft - 1
    })
    
    const bomb_msg =  (this.state.secondsLeft > 0) ?
                      `${this.state.secondsLeft} seconds left before I go boom!` :
                      `Boom!`
    return (
      <div className="bomb">
        {bomb_msg}
      </div>
    )
  }
}

export default Bomb