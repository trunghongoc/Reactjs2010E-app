import { INCREMENT, DECREMENT } from './../actionTypes'

export const increment = num => {
  return {
    type: INCREMENT,
    num
  }
}

export const decrement = payload => {
  return {
    type: DECREMENT,
    payload
  }
}
