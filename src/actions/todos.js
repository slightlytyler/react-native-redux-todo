'use strict'

export function setState(state) {
  return { type: 'SET_STATE', state };
}

export function addTodo(title) {
  return { type: 'ADD_TODO', title };
}
