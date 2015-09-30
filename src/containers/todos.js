'use strict'

import React from 'react-native'
import { connect, dispatch } from 'react-redux/native'

import styles from '../styles/styles';

import TodoList from './../components/TodoList'

let {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React

export default class TodosApp extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TodoList />

        <TouchableHighlight
            style={[styles.button, styles.newButton]}
            underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>+ New Todo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
