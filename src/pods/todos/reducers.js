'use strict'

import { combineReducers } from 'redux'
import shortid from 'shortid'

import { actionTypes } from './constants'
import { filterTypes } from './constants'

const {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
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

  case DELETE_TODO:
    return deleteTodo(state, action.id);

  case TOGGLE_COMPLETE:
    return toggleComplete(state, action.id)
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

function deleteTodo(state, id) {
  return state.filter(todo =>
    todo.id !== id
  );
}

function toggleComplete(state, id) {
  return state.map(todo =>
    todo.id === id ?
    Object.assign({}, todo, {
      complete: !todo.complete
    }) :
    todo
  );
}

export default todosReducer;