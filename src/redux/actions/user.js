import {
  SET_USER,
  GET_POST
} from './../actionTypes'
import axios from 'axios'

export const getUser = id => dispatch => {
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
      const user = response.data
      dispatch(
        setUser(user)
      )
    })
}

const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

const getPost = payload => {
  return {
    type: GET_POST,
    payload
  }
}

export const getData = payload => dispatch => {
  if (payload.table === 'user') {
    return dispatch(getUser(payload))
  }

  return dispatch(getPost(payload))
}
