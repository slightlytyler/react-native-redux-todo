'use strict'

import { actionTypes } from './constants'

export function setState(state) {
  return { type: actionTypes.SET_STATE, state };
}

export function addTodo(text, date) {
  return { type: actionTypes.ADD_TODO, text, date };
}

export function updateTodo(id, text, date) {
  return { type: actionTypes.UPDATE_TODO, id, text, date };
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
