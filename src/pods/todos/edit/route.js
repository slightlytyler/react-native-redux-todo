import { TodoFormContainer } from 'pods/todos/form/container'

export default function Route(rowData, rowID) {
  return {
    name: rowData.text,
    component: TodoFormContainer,
    passProps: { item: rowData, rowID: rowID }
  }
}