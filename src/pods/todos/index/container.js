'use strict'

import { connect } from 'react-redux/native'

import { filterTypes } from 'pods/todos/constants'
import { deleteTodos, toggleComplete, filterTodos } from 'pods/todos/actions'
import { NewTodoRoute, EditTodoRoute } from 'pods/todos/routes'

import TodosIndexComponent from './component'

const TodosIndexContainer = connect(state => {
  const todos = state.todos.entities;
  const currentProject = state.projects.condition.currentProject;

  return {
    todos: _.pick(todos, todo =>
      todo.project === currentProject
    ),
    constants: {
      filterTypes
    },
    actions: {
      deleteTodos,
      toggleComplete,
      filterTodos
    },
    routes: {
      NewTodoRoute,
      EditTodoRoute
    }
  };
})(TodosIndexComponent);

export default TodosIndexContainer
