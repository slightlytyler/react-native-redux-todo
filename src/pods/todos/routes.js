'use strict'

import TodosIndexContainer from 'pods/todos/index/container'

export function TodosIndexRoute(options) {
  const { title, subTitle } = options;

  return {
    name: 'todos.index',
    title: title,
    subTitle: subTitle,
    component: TodosIndexContainer,
  }
}

import NewTodoContainer from 'pods/todos/new/container'

export function NewTodoRoute() {
  return {
    name: 'todos.new',
    title: 'New Todo',
    subTitle: 'What needs doing?',
    component: NewTodoContainer
  }
}

import EditTodoContainer from 'pods/todos/edit/container'

export function EditTodoRoute(options) {
  const { subTitle, passProps } = options;

  return {
    name: 'todos.edit',
    title: 'Edit Todo',
    subTitle:  subTitle,
    component: EditTodoContainer,
    passProps: { ...passProps }
  }
}