'use strict'

import React from 'react-native'
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

export default class TodosApp extends React.Component {
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
        <TodoList />

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
