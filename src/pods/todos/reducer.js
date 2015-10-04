'use strict'

import { List, Map, fromJS } from 'immutable'
import getNewId from '../../helpers/getNewId'

function setState(state, newState) {
  return state.merge(newState);
}

function addTodo(todosState, text) {
  return fromJS([{
    id: getNewId(todosState),
    text: text,
    isComplete: false
  }, ...todosState]);
}

function updateTodo(todosState, id, text) {
  return todosState.map(todo =>
    todo.get('id') === id ?
    todo.set('text', text) :
    todo
  );
}

function deleteTodo(todosState, id) {
  return todosState.filter(todo =>
    todo.get('id') !== id
  );
}

function toggleComplete(todosState, id) {
  return todosState.map(todo =>
    todo.get('id') === id ?
    todo.set('complete', !todo.get('complete')) :
    todo
  );
}

export default function (state=Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'ADD_TODO':
    return state.update('todos', todosState => addTodo(todosState, action.text));
  case 'UPDATE_TODO':
    return state.update('todos', todosState => updateTodo(todosState, action.id, action.text));
  case 'DELETE_TODO':
    return state.update('todos', todosState => deleteTodo(todosState, action.id));
  case 'TOGGLE_COMPLETE':
    return state.update('todos', todosState => toggleComplete(todosState, action.id));
  }
  return state;
}
