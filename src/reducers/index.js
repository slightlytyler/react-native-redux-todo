'use strict'

import { List, Map, fromJS } from 'immutable'
import getNewId from '../helpers/getNewId'

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

export default function (state=Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'ADD_TODO':
    return state.update('todos', todosState => addTodo(todosState, action.title));
  }
  return state;
}
