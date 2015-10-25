'use strict'

import { connect } from 'react-redux/native'

import { addTodo, updateTodo } from 'pods/todos/actions'

import TodoFormComponent from 'pods/todos/components/form'

const TodoFormContainer = connect(state => {
  return {
    currentProject: state.projects.condition.currentProject,
    actions: {
      addTodo,
      updateTodo
    }
  }
})(TodoFormComponent);

export default TodoFormContainer;
