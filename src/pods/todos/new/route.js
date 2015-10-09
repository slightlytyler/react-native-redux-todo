import { TodoFormContainer } from 'pods/todos/form/container'

export default function Route() {
  return {
    name: 'todos.new',
    title: 'New Todo',
    component: TodoFormContainer
  }
}