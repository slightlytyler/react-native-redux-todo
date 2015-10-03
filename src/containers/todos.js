'use strict'

import React from 'react-native'
import { bindActionCreators } from 'redux';
import { connect, dispatch } from 'react-redux/native'

import styles from '../styles/styles';

import EditTodo from './../components/EditTodo'
import TodoList from './../components/TodoList'

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = React

@connect(state => {
  console.log(state);
  return {
    todos: state.get('todos')
  }
})

export default class Todos extends React.Component {
  openItem(rowData, rowID) {
    this.props.navigator.push({
      title: rowData && rowData.txt || 'New Item',
      component: EditTodo,
      passProps: {item: rowData, id: rowID}
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TodoList todos={this.props.todos}/>

        <TouchableHighlight
            style={[styles.button, styles.newButton]}
            underlayColor='#99d9f4'
            onPress={this.openItem.bind(this)}>
            <Text style={styles.buttonText}>+ New Todo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
