import React, { useRef } from 'react'
// import './scss/index.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/hooks/Counter'

const App = () => {
  const counterComponent = useRef(null)

  return (
    <>
      <h1>Hoc react hooks</h1>
      {/* <Counter increment={1} />
      <Counter ref={counterComponent} increment={2} /> */}
      <Counter increment={10} color="blue" />
    </>
  )
}

export default App
