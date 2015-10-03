'use strict'

import React from 'react-native'
import mainStyles from '../styles/styles';

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput
} = React

var styles = StyleSheet.create({
  todoForm: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 98,
    marginBottom: 24
  },

  inputContainer: {

  },

  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    padding: 10,
    height: 40,
    borderColor: 'rgba(0,0,0,.3)',
    borderWidth: 1,
    borderRadius: 6
  }
});

export default class EditTodo extends React.Component {
  render() {
    return(
      <View style={styles.todoForm}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput value="test" style={styles.input}/>
        </View>

        <TouchableHighlight
            style={[mainStyles.button, mainStyles.saveButton]}
            underlayColor='#99d9f4'>
          <Text style={mainStyles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
