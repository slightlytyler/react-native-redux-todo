'use strict';

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function'

import moment from 'moment'

import CustomActionSheet from 'react-native-custom-action-sheet'

var {
  Text,
  View,
  DatePickerIOS,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} = React;

export default class TextInputDatePicker extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      datePickerVisible: false,
    }
  }

  toggleDatePickerModal() {
    this.setState({ datePickerVisible: !this.state.datePickerVisible });
  }


  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.toggleDatePickerModal.bind(this)}>
          <View style={styles.input}>
            <Text style={styles.inputText}>{moment(this.props.date).format("dddd M/D/YY, h:mm:ss a")}</Text>
          </View>
        </TouchableWithoutFeedback>

        <CustomActionSheet modalVisible={this.state.datePickerVisible}
                           onCancel={this.toggleDatePickerModal.bind(this)}>
          <View style={styles.datePickerContainer}>
            <DatePickerIOS date={this.props.date}
                           minimumDate={this.props.minimumDate}
                           mode={this.props.mode}
                           onDateChange={this.props.onDateChange} />
          </View>
        </CustomActionSheet>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  datePickerContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
  },

  input: {
    justifyContent: 'center',

    height: 40,
    padding: 5,

    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6
  },

  inputText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, .8)',
  },

  datePicker: {
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 220,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
});