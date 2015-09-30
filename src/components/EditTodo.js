'use strict'

import React from 'react-native'
import styles from '../styles/styles';

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput
} = React

export default class EditTodo extends React.Component {
  render() {
    return(
      <View style={styles.todo}>
        <TextInput value="test" style={styles.editTodo} />
        <TouchableHighlight
            style={[styles.button, styles.saveButton]}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
