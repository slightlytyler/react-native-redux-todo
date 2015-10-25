'use strict'

import { connect } from 'react-redux/native'

import TodosIndexComponent from './component'

const TodosIndexContainer = connect(state => {
  const todos = state.todos.entities;
  const currentProject = state.projects.condition.currentProject;

  return {
    todos: _.pick(todos, todo =>
      todo.project === currentProject
    ) || {}
  };
})(TodosIndexComponent);

export default TodosIndexContainer
