'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'

import moment from 'moment';

import { addTodo, updateTodo } from '../actions'
import mainStyles from 'styles/styles';

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  DatePickerIOS
} = React

var styles = StyleSheet.create({
  todoForm: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 98,
    marginBottom: 24
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

export class TodoFormComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    const { item } = this.props;
    const currentDate = new Date();

    this.state = {
      text: item ? item.text : '',
      date: item ? item.date : moment(currentDate).add(1, 'hour').toDate(),
      currentDate: currentDate
    };
  }

  handleTextChange(text) {
    this.setState({ text: text });
  }

  handleDateChange(date) {
    this.setState({ date: date });
  }

  submit() {
    const { item, rowID, dispatch } = this.props;
    const { text, date } = this.state;

    if (rowID) {
      dispatch(updateTodo(item.id, text, date));
    } else {
      dispatch(addTodo(text, date));
    }

    this.setState({ text: '' });

    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={styles.todoForm}>
        <View>
          <Text style={styles.label}>Text</Text>
          <TextInput style={styles.input}
                     value={this.state.text}
                     autoFocus={true}
                     onChangeText={this.handleTextChange.bind(this)}/>
        </View>

        <View>
        <DatePickerIOS
            date={this.state.date}
            minimumDate={this.state.currentDate}
            onDateChange={this.handleDateChange.bind(this)}
            mode="datetime"
          />
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

export const TodoFormContainer = connect()(TodoFormComponent);
