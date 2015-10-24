'use strict'

import { actionTypes } from './constants'

const {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODOS,
  TOGGLE_COMPLETE,
  FILTER_TODOS
} = actionTypes;

export function addTodo(text, date, notificationsEnabled, project) {
  return { type: ADD_TODO, text, date, notificationsEnabled, project };
}

export function updateTodo(id, text, date, notificationsEnabled) {
  return { type: UPDATE_TODO, id, text, date, notificationsEnabled };
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
