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

export function EditTodoRoute(item) {
  return {
    name: 'todos.edit',
    title: 'Edit Todo',
    subTitle:  item.text,
    component: EditTodoContainer,
    passProps: { item: item }
  }
}