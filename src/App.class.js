import React, { Component } from 'react'
import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Counter from './components/Counter'

import { MyGlobalContext } from './context/MyGlobalContext'
class App extends Component {
  constructor() {
    super()

    this.state = {
      gContext: {
        name: 'Nguyễn Văn A',
        age: 16
      }
    }
  }

  render() {
    return (
      <>
        <MyGlobalContext.Provider value={this.state.gContext}>
          <h1>Lớp học reactjs</h1>
          <Counter />

          <button>Increment IN APP</button>
        </MyGlobalContext.Provider>
      </>
    )
  }
}

export default App
