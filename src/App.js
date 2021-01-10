import React, { Component } from 'react'
import './scss/index.scss'

import MusicList from './components/MusicList'
class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <h1>Hoc reactjs</h1>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.increment}>Increment 1</button>
{/*
        <button onClick={() => this.increment(1)}>Increment 1</button>
        <button onClick={() => this.increment(2)}>Increment 2</button> */}

        <MusicList />
        <hr />
        <MusicList />
        <hr />
        <MusicList />
      </>
    )
  }
}

export default App
