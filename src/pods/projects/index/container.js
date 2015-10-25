'use strict'

import { connect } from 'react-redux/native'
import { createSelector } from 'reselect';

import { deleteProject, selectProject } from 'pods/projects/actions'

import { NewProjectRoute, EditProjectRoute } from 'pods/projects/routes'
import { TodosIndexRoute } from 'pods/todos/routes'

import ProjectsIndexComponent from './component'

const ProjectsIndexContainer = connect(state => {
  return {
    projects: projectsWithCompleteSelector(state),
    actions: {
      deleteProject,
      selectProject
    },
    routes: {
      NewProjectRoute,
      EditProjectRoute,
      TodosIndexRoute
    }
  };
})(ProjectsIndexComponent);

const projectsSelector = state => state.projects.entities;
const todosSelector = state => state.todos.entities;

const todosByProjectSelector = createSelector(
  projectsSelector,
  todosSelector,
  (projects, todos) => _.mapValues(projects, project =>
    _.pick(todos, todo =>
      todo.project === project.id
    )
  )
);

const projectsWithCompleteSelector = createSelector(
  projectsSelector,
  todosByProjectSelector,
  (projects, todosByProject) => _.mapValues(projects, project => {
    let todos = todosByProject[project.id];

    let complete = !_.isEmpty(todos) && _.every(todos, todo =>
      todo.complete
    );

    return Object.assign({}, project, {
      complete: complete
    });
  })
);

export default ProjectsIndexContainer;