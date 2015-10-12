'use strict'

import { combineReducers } from 'redux'

import todos from 'pods/todos/reducer'

const appReducers = combineReducers({
  todos
});

export default appReducers