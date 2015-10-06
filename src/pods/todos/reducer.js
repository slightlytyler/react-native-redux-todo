'use strict'

import { List, Map, fromJS } from 'immutable'

import { actionTypes } from './constants'
import getNewId from 'helpers/getNewId'

function setState(state, newState) {
  return state.merge(newState);
}

function addTodo(todosListState, text) {
  return fromJS([{
    id: getNewId(todosListState),
    text: text,
    isComplete: false
  }, ...todosListState]);
}

function updateTodo(todosListState, id, text) {
  return todosListState.map(todo =>
    todo.get('id') === id ?
    todo.set('text', text) :
    todo
  );
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

export default function (state=Map(), action) {
  switch (action.type) {
  case actionTypes.SET_STATE:
    return setState(state, action.state);
  case actionTypes.ADD_TODO:
    return state.updateIn(['todos', 'list'], todosListState => addTodo(todosListState, action.text));
  case actionTypes.UPDATE_TODO:
    return state.updateIn(['todos', 'list'], todosListState => updateTodo(todosListState, action.id, action.text));
  case actionTypes.DELETE_TODO:
    return state.updateIn(['todos', 'list'], todosListState => deleteTodo(todosListState, action.id));
  case actionTypes.TOGGLE_COMPLETE:
    return state.updateIn(['todos', 'list'], todosListState => toggleComplete(todosListState, action.id));
  case actionTypes.FILTER_TODOS:
    return state.setIn(['todos', 'filter'], action.filter)
  }
  return state;
}
