import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const middlewareEnhancer = applyMiddleware(reduxThunk)

const store = createStore(
  rootReducer,
  undefined,
  compose(
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
