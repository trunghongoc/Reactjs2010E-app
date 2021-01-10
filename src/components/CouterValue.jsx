import { useSelector } from 'react-redux'

const CounterValue = () => {
  const count = useSelector(store => store.counterReducer.count)

  return (
    <>
      <h2>Counter: {count}</h2>
    </>
  )
}

export default CounterValue
