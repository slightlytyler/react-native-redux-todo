'use strict'

import { actionTypes } from './constants'

const {
  ADD_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT
} = actionTypes;

export function addProject(title, subTitle) {
  return { type: ADD_PROJECT, title, subTitle };
}

export function updateProject(id, title, subTitle) {
  return { type: UPDATE_TODO, id, title, subTitle };
}

export function deleteProject(id) {
  return { type: DELETE_TODOS, id };
}
