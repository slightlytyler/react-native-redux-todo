'use strict'

import { actionTypes } from './constants'

export function setState(state) {
  return { type: actionTypes.SET_STATE, state };
}

export function addTodo(text) {
  return { type: actionTypes.ADD_TODO, text };
}

export function updateTodo(id, text) {
  return { type: actionTypes.UPDATE_TODO, id, text };
}

export function deleteTodo(id) {
  return { type: actionTypes.DELETE_TODO, id };
}

export function toggleComplete(id) {
  return { type: actionTypes.TOGGLE_COMPLETE, id };
}

export function filterTodos(filter) {
  return { type: actionTypes.FILTER_TODOS, filter };
}
