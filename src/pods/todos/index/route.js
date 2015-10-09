import { TodosIndexContainer } from 'pods/todos/index/container'
import NewTodoRoute from 'pods/todos/new/route';

export default function Route(getNavigator) {
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