'use strict'

import { combineReducers } from 'redux'

import todos from 'pods/todos/reducers'

const appReducers = combineReducers({
  todos
});

export default appReducers