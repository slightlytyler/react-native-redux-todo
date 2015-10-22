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
  return { type: UPDATE_PROJECT, id, title, subTitle };
}

export function deleteProject(id) {
  return { type: DELETE_PROJECT, id };
}
