'use strict'

import React from 'react-native'
import styles from '../styles/styles';

var {
  StyleSheet,
  View,
  TextInput
} = React

export default class NewTodo extends React.Component {
  render() {
    return(
      <TextInput
            style={styles.newTodo}
            placeholder="What needs doing?" />
    )
  }
}
