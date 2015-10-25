'use strict'

import { connect } from 'react-redux/native'

import { addTodo } from 'pods/todos/actions'

import TodoFormComponent from 'pods/todos/components/form'

const NewTodoContainer = connect(state => {
  return {
    currentProject: state.projects.condition.currentProject,
    actions: {
      submit: addTodo
    }
  }
})(TodoFormComponent);

export default NewTodoContainer;
