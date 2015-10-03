'use strict'

import { List, Map, fromJS } from 'immutable'

function setState(state, newState) {
  return state.merge(newState);
}

function addTodo(todosState, title) {
  console.log('it worked!');
}

export default function (state=Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'ADD_TODO':
    return state.update('todos', todosState => addTodo(todosState, action.title));
  }
  return state;
}
