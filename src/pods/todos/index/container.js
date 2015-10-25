'use strict'

import { connect } from 'react-redux/native'
import { bindActionCreators, compose } from 'redux'
import { createSelector } from 'reselect'

import { deleteTodos, toggleComplete } from 'pods/todos/actions'
import { NewTodoRoute, EditTodoRoute } from 'pods/todos/routes'

import TodosIndexComponent from './component'

function mapStateToProps(state) {
  const todos = state.todos.entities;
  const currentProject = state.projects.condition.currentProject;

  return {
    todos: sortedTodosSelector(state)
  };
}

const todosSelector = state => state.todos.entities;
const currentProjectSelector = state =>
    state.projects.condition.currentProject;

const todosForProjectSelector = createSelector(
  todosSelector,
  currentProjectSelector,
  (todos, currentProject) => _.pick(todos, todo =>
    todo.project === currentProject
  )
);

const sortedTodosSelector = createSelector(
  todosForProjectSelector,
  todos => _.sortBy(todos, 'date')
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTodos, toggleComplete }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { navigator } = ownProps;

  return Object.assign({}, stateProps, {
    actions: {
      ...dispatchProps,
      newTodo: () => compose(navigator.push, NewTodoRoute)(),
      openTodo: item => compose(navigator.push, EditTodoRoute)({
        subTitle: item.text,
        passProps: { item }
      })
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodosIndexComponent);
