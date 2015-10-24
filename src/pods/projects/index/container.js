'use strict'

import { connect } from 'react-redux/native'
import { createSelector } from 'reselect';

import ProjectsIndexComponent from './component'

const ProjectsIndexContainer = connect(state => {
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


  return {
    projects: projectsWithCompleteSelector(state),
    todosByProject: todosByProjectSelector(state)
  };
})(ProjectsIndexComponent);

export default ProjectsIndexContainer;