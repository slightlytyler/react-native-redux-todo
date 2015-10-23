'use strict'

import shortid from 'shortid'

import { actionTypes } from './constants'

const {
  ADD_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT
} = actionTypes;

export default function reducer(state={}, action) {
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
  const id =shortid.generate();

  return {
    [id]: {
      id,
      title,
      subTitle,
    },
    ...state
  };
}

function updateProject(state, id, title, subTitle) {
  return _.mapValues(state, project =>
    project.id === id ?
    Object.assign({}, project, {
      title, subTitle
    }) :
    project
  );
}

function deleteProject(state, id) {
  return _.pick(state, project =>
    project.id !== id
  );
}