'use strict'

import { combineReducers } from 'redux'
import shortid from 'shortid'

import { actionTypes } from './constants'
import { actionTypes as projectsActionTypes } from 'pods/projects/constants'
import { filterTypes } from './constants'

const {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODOS,
  TOGGLE_COMPLETE,
  FILTER_TODOS
} = actionTypes;

const { DELETE_PROJECT } = projectsActionTypes;

const todosReducer = combineReducers({
  entities: entitiesReducer,
  condition: conditionReducer
});

function entitiesReducer(state={}, action) {
  switch (action.type) {

  case ADD_TODO:
    return addTodo(state, action.text, action.date, action.notificationsEnabled, action.project);

  case UPDATE_TODO:
    return updateTodo(state, action.id, action.text, action.date, action.notificationsEnabled);

  case DELETE_TODOS:
    return deleteTodos(state, action.ids);

  case TOGGLE_COMPLETE:
    return toggleComplete(state, action.id)

  case DELETE_PROJECT:
    return deleteTodosByProject(state, action.id)
  }

  return state;
}

function conditionReducer(state={}, action) {
  switch (action.type) {
  }

  return state;
}

function addTodo(state, text, date, notificationsEnabled, project) {
  const id =shortid.generate();

  return {
    [id]: {
      id,
      text,
      date,
      notificationsEnabled,
      complete: false,
      project
    },
    ...state
  };
}

function updateTodo(state, id, text, date, notificationsEnabled) {
  return _.mapValues(state, todo =>
    todo.id === id ?
    Object.assign({}, todo, {
      text, date, notificationsEnabled
    }) :
    todo
  );
}

function deleteTodos(state, ids) {
  return _.pick(state, todo =>
    ids.indexOf(todo.id) === -1
  );
}

function toggleComplete(state, id) {
  return _.mapValues(state, todo =>
    todo.id === id ?
    Object.assign({}, todo, {
      complete: !todo.complete
    }) :
    todo
  );
}

function deleteTodosByProject(state, id) {
  return _.pick(state, todo =>
    todo.project !== id
  );
}

export default todosReducer;