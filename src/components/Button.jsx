import { useDispatch } from 'react-redux'
import { increment, decrement } from './../redux/actions/counter'
import { getUser } from './../redux/actions/user'

const Button = () => {
  const dispatch = useDispatch()

  const incrementCount = (num) => {
    dispatch(increment(num))
  }

  const decrementCount = () => {
    dispatch(decrement())
  }

  const getData = () => {
    dispatch(
      getUser(2)
    )
  }

  return (
    <>
      <button onClick={() => incrementCount(1)}>Increment 1</button>
      <button onClick={() => incrementCount(2)}>Increment 2</button>
      <button onClick={() => incrementCount(10)}>Increment 10</button>

      <button onClick={decrementCount}>Decrement</button>

      <hr />

      <button onClick={getData}>Get Data</button>
    </>
  )
}

export default Button
