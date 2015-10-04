'use strict'

export function setState(state) {
  return { type: 'SET_STATE', state };
}

export function addTodo(text) {
  return { type: 'ADD_TODO', text };
}

export function updateTodo(id, text) {
  return { type: 'UPDATE_TODO', id, text };
}

export function toggleComplete(id) {
  return { type: 'TOGGLE_COMPLETE', id };
}
