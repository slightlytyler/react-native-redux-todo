'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'

import { deleteTodo } from '../actions/todos'

import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

import styles from '../styles/styles';

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  AlertIOS
} = React

@connect(state => {
  return {
    todos: state.get('todos')
  }
})

export default class Todos extends React.Component {
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

  render() {
    return (
      <View style={{flex: 1}}>
        <TodoList todos={this.props.todos}
                  editTodo={this.editTodo.bind(this)} />

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
