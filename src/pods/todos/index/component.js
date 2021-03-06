'use strict'

import {
  Component,
  PropTypes,
  View,
  AlertIOS
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'

import TodoList from 'pods/todos/components/List'
import AddNewButton from 'components/AddNewButton'


export default class TodosIndexComponent extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  editTodo(item) {
    const { openTodo, deleteTodo } = this.props.actions;

    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => openTodo(item) },
        { text: 'Delete', onPress: () => deleteTodo(item.id) },
        { text: 'Cancel' }
      ]
    );
  }

  render() {
    const { todos, actions } = this.props;
    const { newTodo, toggleComplete } = actions;

    return (
      <View style={{flex: 1}}>
        <TodoList todos={todos}
                  editTodo={this.editTodo.bind(this)}
                  toggleComplete={toggleComplete} />

        <AddNewButton title="Add New Task"
                      onPress={newTodo} />
      </View>
    )
  }
}

TodosIndexComponent.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    newTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    openTodo: PropTypes.func.isRequired
  })
};