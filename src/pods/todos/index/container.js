'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'

import { deleteTodo, toggleComplete } from '../actions'

import TodoList from './components/List'
import TodoForm from '../form/container'

import styles from 'styles/styles';

var {
  View,
  Text,
  TouchableHighlight,
  AlertIOS
} = React

@connect(state => {
  return {
    todos: state.todosReducer.get('todos')
  }
})

export default class TodosIndexContainer extends React.Component {
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
    this.props.navigator.push({
      title: rowData && rowData.text || 'New Item',
      component: TodoForm,
      passProps: {item: rowData, rowID: rowID}
    });
  }

  toggleComplete(id) {
    this.props.dispatch(toggleComplete(id));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TodoList todos={this.props.todos}
                  editTodo={this.editTodo.bind(this)}
                  toggleComplete={this.toggleComplete.bind(this)} />

        <TouchableHighlight
            style={[styles.button, styles.newButton]}
            underlayColor='#99d9f4'
            onPress={this.openTodo.bind(this)}>
            <Text style={styles.buttonText}>+ New Todo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
