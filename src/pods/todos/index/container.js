'use strict'

import { connect } from 'react-redux/native'
import { bindActionCreators, compose } from 'redux'

import { deleteTodos, toggleComplete } from 'pods/todos/actions'
import { NewTodoRoute, EditTodoRoute } from 'pods/todos/routes'

import TodosIndexComponent from './component'

function mapStateToProps(state) {
  const todos = state.todos.entities;
  const currentProject = state.projects.condition.currentProject;

  return {
    todos: _.pick(todos, todo =>
      todo.project === currentProject
    )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTodos, toggleComplete }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { navigator } = ownProps;

  return Object.assign({}, stateProps, {
    actions: {
      ...dispatchProps,
      newTodo: () => compose(navigator.push, NewTodoRoute)(),
      openTodo: item => compose(navigator.push, EditTodoRoute)(item)
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodosIndexComponent);
