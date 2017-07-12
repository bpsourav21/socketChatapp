

import { createStore, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import allreducers from '../reducers'

export default () => {
  return createStore(
    allreducers,
    applyMiddleware(thunk)
  )
}
