import React from 'react'

import { MyGlobalContext } from './../context/MyGlobalContext'

class Counter extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>increment</button>

        <p>Count: {this.state.count}</p>

        <MyGlobalContext.Consumer>
          {
            data => (
              <h1>{data.name}</h1>
            )
          }
        </MyGlobalContext.Consumer>
      </div>
    )
  }
}

export default Counter
