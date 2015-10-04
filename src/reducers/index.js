'use strict'

import { combineReducers } from 'redux'
import todosReducer from 'pods/todos/reducer'

const appReducers = combineReducers({
  todosReducer
})

export default appReducers