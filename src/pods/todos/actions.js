'use strict'

import { actionTypes } from './constants'

const {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE,
  FILTER_TODOS
} = actionTypes;

export function addTodo(text, date) {
  return { type: ADD_TODO, text, date };
}

export function updateTodo(id, text, date) {
  return { type: UPDATE_TODO, id, text, date };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}

export function toggleComplete(id) {
  return { type: TOGGLE_COMPLETE, id };
}

export function filterTodos(filter) {
  return { type: FILTER_TODOS, filter };
}
