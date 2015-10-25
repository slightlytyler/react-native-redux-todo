'use strict'

import { connect } from 'react-redux/native'

import { updateTodo } from 'pods/todos/actions'

import TodoFormComponent from 'pods/todos/components/form'

const EditTodoContainer = connect(state => {
  return {
    actions: {
      submit: updateTodo
    }
  }
})(TodoFormComponent);

export default EditTodoContainer;
