import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

// const: array, obj, fn, (ko bị gán lại)
// let

const getEvent = count => {
  return !(count % 2) ? 'even' : 'odd'
}

const Counter = ({ increment, color }) => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log('---- render lan dau')
  }, [count])

  const isEven = useMemo(() => {
    return !(count % 2) ? 'even' : 'odd'
  }, [count])

  const isEvenVietNamese = useMemo(() => {
    return isEven === 'even' ? 'chan' : 'le'
  }, [isEven])

  return (
    <>
      <button
        className="btn -danger"
        style={{ backgroundColor: color }}
        onClick={() => setCount(count + 1)}
      >INCREMENT COUNT 1</button>

      <p>Count___1: {count}</p>
      <p>is even: {isEven}, {isEvenVietNamese}</p>
      <hr />


      <button
        className="btn -danger"
        style={{ backgroundColor: color }}
        onClick={() => setCount2(count2 + 1)}
      >INCREMENT COUNT 2</button>

      <p>Count___2: {count2}</p>

      <hr />
    </>
  )
}

Counter.propTypes = {
  increment: PropTypes.number.isRequired,
  color: PropTypes.string
}

Counter.defaultProps = {
  color: 'yellow'
}

export default Counter
