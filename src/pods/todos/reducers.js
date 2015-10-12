'use strict'

import { combineReducers } from 'redux'
import { List } from 'immutable'

import { actionTypes } from './constants'
import getNewId from 'helpers/getNewId'

var todosReducer = combineReducers({
  list: listReducer,
  filter: filterReducer
});

function listReducer(state=List(), action) {
  switch (action.type) {

  case actionTypes.ADD_TODO:
    return state.update('list', todosListState =>
              addTodo(todosListState, action.text, action.date));

  case actionTypes.UPDATE_TODO:
    return state.update('list', todosListState =>
              updateTodo(todosListState, action.id, action.text, action.date));

  case actionTypes.DELETE_TODO:
    return state.update('list', todosListState =>
              deleteTodo(todosListState, action.id));

  case actionTypes.TOGGLE_COMPLETE:
    return state.update('list', todosListState =>
              toggleComplete(todosListState, action.id));
  }
  return state;
}

function filterReducer(state='All', action) {
  switch (action.type) {
    case actionTypes.FILTER_TODOS:
      return state.set('filter', action.filter)
  }

  return state;
}


function addTodo(todosListState, text, date) {
  return fromJS([{
    id: getNewId(todosListState),
    text: text,
    date: date,
    complete: false
  }, ...todosListState]);
}

function updateTodo(todosListState, id, text, date) {
  return todosListState.map(todo => {
    if (todo.get('id') === id) {
      return todo.set('text', text)
                 .set('date', date);
    }

    return todo;
  });
}

function deleteTodo(todosListState, id) {
  return todosListState.filter(todo =>
    todo.get('id') !== id
  );
}

function toggleComplete(todosListState, id) {
  return todosListState.map(todo =>
    todo.get('id') === id ?
    todo.set('complete', !todo.get('complete')) :
    todo
  );
}

export default todosReducer;