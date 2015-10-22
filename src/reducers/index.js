'use strict'

import { combineReducers } from 'redux'

import todos from 'pods/todos/reducers'
import projects from 'pods/projects/reducers'

const appReducers = combineReducers({
  todos,
  projects
});

export default appReducers