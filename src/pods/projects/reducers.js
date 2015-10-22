'use strict'

import shortid from 'shortid'

import { actionTypes } from './constants'

const {
  ADD_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT
} = actionTypes;

export default function reducer() {
  switch (action.type) {

  case ADD_PROJECT:
    return addProject(state, action.title, action.subTitle);

  case UPDATE_PROJECT:
    return updateProject(state, action.id, action.title, action.subTitle);

  case DELETE_PROJECT:
    return deleteProject(state, action.id);
  }
  return state;
}

function addProject(state, title, subTitle) {
  return [{
    id: shortid.generate(),
    title,
    subTitle,
  }, ...state];
}

function updateProject(state, id, title, subTitle) {
  return state.map(project =>
    project.id === id ?
    Object.assign({}, project, {
      title, subTitle
    }) :
    project
  );
}

function deleteProject(state, id) {
  return state.filter(project =>
    project.id !== id
  );
}