'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'

import TodoList from './../components/TodoList'
import TodoForm from './../components/TodoForm'

import styles from '../styles/styles';

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = React

@connect(state => {
  return {
    todos: state.get('todos')
  }
})

export default class Todos extends React.Component {
  editTodo(rowData, rowID) {
    console.log(rowData, rowID);
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
            onPress={this.editTodo.bind(this)}>
            <Text style={styles.buttonText}>+ New Todo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
