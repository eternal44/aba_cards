import { createStore, compose, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { fetchImages } from '../actions'

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  {},
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  compose(
  )
)

store.dispatch(fetchImages())

export default store
