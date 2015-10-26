'use strict'

import { connect } from 'react-redux/native'
import { bindActionCreators, compose } from 'redux'
import { createSelector } from 'reselect'

import { deleteProject, selectProject } from 'pods/projects/actions'

import { NewProjectRoute, EditProjectRoute } from 'pods/projects/routes'
import { TodosIndexRoute } from 'pods/todos/routes'

import ProjectsIndexComponent from './component'

function mapStateToProps(state) {
  return {
    projects: projectsWithCompleteSelector(state),

  }
}

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteProject,
    _selectProject: selectProject
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { deleteProject, _selectProject } = dispatchProps;
  const { navigator } = ownProps;

  return Object.assign({}, stateProps, {
    actions: {
      deleteProject,
      newProject: () => compose(navigator.push, NewProjectRoute)(),
      selectProject: project => {
        let { id, title, subTitle } = project;

        _selectProject(id);
        compose(navigator.push, TodosIndexRoute)({
          title,
          subTitle
        });
      },
      openProject: item => compose(navigator.push, EditProjectRoute)({
        subTitle: item.title,
        passProps: { item }
      })
    }
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ProjectsIndexComponent);
