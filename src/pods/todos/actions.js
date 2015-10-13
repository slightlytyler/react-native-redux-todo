'use strict'

import { actionTypes } from './constants'

const {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODOS,
  TOGGLE_COMPLETE,
  FILTER_TODOS
} = actionTypes;

export function addTodo(text, date) {
  return { type: ADD_TODO, text, date };
}

export function updateTodo(id, text, date) {
  return { type: UPDATE_TODO, id, text, date };
}

export function deleteTodos(ids) {
  return { type: DELETE_TODOS, ids };
}

export function toggleComplete(ids) {
  return { type: TOGGLE_COMPLETE, ids };
}

export function filterTodos(filter) {
  return { type: FILTER_TODOS, filter };
}
