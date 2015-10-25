'use strict'

import TodosIndexContainer from 'pods/todos/index/container'

export function TodosIndexRoute(title, subTitle) {
  return {
    name: 'todos.index',
    title: title,
    subTitle: subTitle,
    component: TodosIndexContainer,
  }
}

import TodoFormContainer from 'pods/todos/form/container'

export function NewTodoRoute() {
  return {
    name: 'todos.new',
    title: 'New Todo',
    subTitle: 'What needs doing?',
    component: TodoFormContainer
  }
}

export function EditTodoRoute(rowData, rowID) {
  return {
    name: 'todos.edit',
    title: 'Edit Todo',
    subTitle:  rowData.text,
    component: TodoFormContainer,
    passProps: { item: rowData, rowID: rowID }
  }
}