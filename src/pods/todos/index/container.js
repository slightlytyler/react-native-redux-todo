'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'
import { List } from 'immutable'

import { deleteTodo, toggleComplete, filterTodos } from '../actions'
import TodoList from './components/List'
import EditTodoRoute from 'pods/todos/edit/route';
import NewTodoRoute from 'pods/todos/new/route';

import styles from 'styles/styles';

var {
  View,
  Text,
  TouchableHighlight,
  AlertIOS
} = React

export class TodosIndexComponent extends React.Component {
  editTodo(rowData, rowID) {
    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => this.openTodo(rowData, rowID) },
        { text: 'Delete', onPress: () => this.deleteTodo(rowData.id) },
        { text: 'Cancel' }
      ]
    );
  }

  deleteTodo(id) {
    this.props.dispatch(deleteTodo(id));
  }

  openTodo(rowData, rowID) {
    this.props.navigator.push(EditTodoRoute(rowData, rowID));
  }

  newTodo() {
    this.props.navigator.push(NewTodoRoute())
  }

  toggleComplete(id) {
    this.props.dispatch(toggleComplete(id));
  }

  filterTodos(filter) {
    this.props.dispatch(filterTodos(filter.toLowerCase()));
  }

  render() {
    const { todos, filter } = this.props;

    return (
      <View style={{flex: 1}}>
        <TodoList todos={todos}
                  filter={filter}
                  editTodo={this.editTodo.bind(this)}
                  toggleComplete={this.toggleComplete.bind(this)}
                  filterTodos={this.filterTodos.bind(this)}/>

        <TouchableHighlight
            style={[styles.button, styles.newButton]}
            underlayColor='#99d9f4'
            onPress={this.newTodo.bind(this)}>
            <Text style={styles.buttonText}>+ New Todo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export const TodosIndexContainer = connect(state => {
  const todos = state.todosReducer.getIn(['todos', 'list']) || List();
  const filter = state.todosReducer.getIn(['todos', 'filter']) || 'all';
  const filterBool = filter === 'completed';

  return {
      todos: filter === 'all' ?
             todos :
             todos.filter(todo => todo.get('complete') === filterBool),
      filter: filter
    };
})(TodosIndexComponent);
