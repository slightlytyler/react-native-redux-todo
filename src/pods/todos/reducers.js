'use strict'

import { combineReducers } from 'redux'
import shortid from 'shortid'

import { actionTypes } from './constants'
import { filterTypes } from './constants'

const {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODOS,
  TOGGLE_COMPLETE,
  FILTER_TODOS
} = actionTypes;

const {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETE
} = filterTypes;

const todosReducer = combineReducers({
  list: listReducer,
  filter: filterReducer
});

function listReducer(state=[], action) {
  switch (action.type) {

  case ADD_TODO:
    return addTodo(state, action.text, action.date);

  case UPDATE_TODO:
    return updateTodo(state, action.id, action.text, action.date);

  case DELETE_TODOS:
    return deleteTodos(state, action.ids);

  case TOGGLE_COMPLETE:
    return toggleComplete(state, action.ids)
  }
  return state;
}

function filterReducer(state=SHOW_ALL, action) {
  switch (action.type) {
    case FILTER_TODOS:
      return action.filter;
  }

  return state;
}

function addTodo(state, text, date) {
  return [{
    id: shortid.generate(),
    text: text,
    date: date,
    complete: false,
  }, ...state];
}

function updateTodo(state, id, text, date) {
  return state.map(todo =>
    todo.id === id ?
    Object.assign({}, todo, {
      text, date
    }) :
    todo
  );
}

function deleteTodos(state, ids) {
  return state.filter(todo =>
    ids.indexOf(todo.id) === -1
  );
}

function toggleComplete(state, ids) {
  let currentTodos = state.filter(todo =>
    ids.indexOf(todo.id) !== -1
  );
  let hasIncomplete = currentTodos.some(todo => !todo.complete);

  return state.map(todo =>
    ids.indexOf(todo.id) !== -1 ?
    Object.assign({}, todo, {
      complete: hasIncomplete
    }) :
    todo
  );
}

export default todosReducer;