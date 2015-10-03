'use strict'

import { combineReducers } from 'redux'
import todosReducer from './todos'

const appReducers = combineReducers({
  todosReducer
})

export default appReducers

