'use strict'

import {
  Component,
  PropTypes,
  View,
  AlertIOS
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'

import moment from 'moment'

import TodoList from 'pods/todos/components/List'
import TodosHeader from 'pods/todos/components/Header'
import AddNewButton from 'components/AddNewButton'

import styles from 'styles/styles'


export default class TodosIndexComponent extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  sortTodos(todos) {
    return _.sortBy(todos, (a, b) => {
      let keyA = moment(a.date),
          keyB = moment(b.date);

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  editTodo(item) {
    const { openTodo, deleteTodos } = this.props.actions;

    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => openTodo(item) },
        { text: 'Delete', onPress: () => deleteTodos([item.id]) },
        { text: 'Cancel' }
      ]
    );
  }

  render() {
    const { todos, actions } = this.props;
    const { newTodo, toggleComplete } = actions;

    return (
      <View style={{flex: 1}}>
        <TodoList todos={this.sortTodos(todos)}
                  editTodo={this.editTodo.bind(this)}
                  toggleComplete={toggleComplete} />

        <AddNewButton title="Add New Task"
                      onPress={newTodo} />
      </View>
    )
  }
}

TodosIndexComponent.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    newTodo: PropTypes.func.isRequired,
    deleteTodos: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    openTodo: PropTypes.func.isRequired
  })
};