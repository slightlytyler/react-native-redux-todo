'use strict'

import { TodosIndexContainer } from 'pods/todos/index/container'

export function TodosIndexRoute(getNavigator) {
  return {
    name: 'todos.index',
    title: 'Todos',
    component: TodosIndexContainer,
    RightButton: {
      text: 'New',
      onPress: () => {
        getNavigator().push(NewTodoRoute())
      }
    }
  }
}

import { TodoFormContainer } from 'pods/todos/form/container'

export function NewTodoRoute() {
  return {
    name: 'todos.new',
    title: 'New Todo',
    component: TodoFormContainer
  }
}

export function EditTodoRoute(rowData, rowID) {
  return {
    name: rowData.text,
    component: TodoFormContainer,
    passProps: { item: rowData, rowID: rowID }
  }
}