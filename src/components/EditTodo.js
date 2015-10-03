'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'

import { addTodo } from '../actions/todos'
import TodosContainer from '../containers/todos'

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

@connect()

export default class EditTodo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props ? this.props.text || '' : ''
    };
  }

  handleChange(e) {
    this.setState({ text: e.nativeEvent.text });
  }

  submit() {
    this.props.dispatch(addTodo(this.state.text));

    this.setState({ text: '' });

    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={styles.todoForm}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Text</Text>
          <TextInput style={styles.input}
                     value={this.state.text}
                     onChange={this.handleChange.bind(this)}/>
        </View>

        <TouchableHighlight
            style={[mainStyles.button, mainStyles.saveButton]}
            underlayColor='#99d9f4'
            onPress={this.submit.bind(this)}>
          <Text style={mainStyles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
