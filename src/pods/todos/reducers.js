'use strict'

import { combineReducers } from 'redux'

import { actionTypes } from './constants'
import getNewId from 'helpers/getNewId'

var todosReducer = combineReducers({
  list: listReducer,
  filter: filterReducer
});

function listReducer(state=[], action) {
  switch (action.type) {

  case actionTypes.ADD_TODO:
    return addTodo(state, action.text, action.date);

  case actionTypes.UPDATE_TODO:
    return updateTodo(state, action.id, action.text, action.date);

  case actionTypes.DELETE_TODO:
    return deleteTodo(state, action.id);

  case actionTypes.TOGGLE_COMPLETE:
    return toggleComplete(state, action.id)
  }
  return state;
}

function filterReducer(state='all', action) {
  switch (action.type) {
    case actionTypes.FILTER_TODOS:
      return action.filter;
  }

  return state;
}

function addTodo(state, text, date) {
  return [{
    id: getNewId(state),
    text: text,
    date: date,
    complete: false,
  }, ...state];
}

function updateTodo(state, id, text, date) {
  return state.map(todo => {
    if (todo.id === id) {
      return {
        id: id,
        text: text,
        date: date,
        complete: todo.complete
      }
    } else {
      return todo;
    }
  });
}


function deleteTodo(state, id) {
  return state.filter(todo =>
    todo.id !== id
  );
}

function toggleComplete(state, id) {
  return state.map(todo => {
    if (todo.id === id) {
      return {
        id: id,
        text: todo.text,
        date: todo.date,
        complete: !todo.complete
      }
    } else {
      return todo;
    }
  });
}

export default todosReducer;