'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function';
import moment from 'moment';

import globalStyles from 'styles/styles'

var {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} = React

export default class TodoItem extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  isDueIn() {
    const date = moment(this.props.rowData.date);
    const dueIn = date.diff(moment());
    const second = 1000,
          minute = 60 * second,
          hour = 60 * minute;

    return {
      value: date.fromNow(),
      oneHour: dueIn < hour,
      fifteenMinutes: dueIn < (15 * minute),
      pastDue: dueIn <= 0
    }
  }
  render() {
    const { rowData, rowID } = this.props;
    const item = rowData;

    const textStyles = [
      styles.text,
      this.isDueIn().oneHour && styles.warnSoon,
      this.isDueIn().fifteenMinutes && styles.warnIminent,
      this.isDueIn().pastDue && styles.warnPastDue,
      item.complete && styles.completed
    ]

    return(
      <TouchableHighlight onPress={() => this.props.toggleComplete(item.id)}
                          onLongPress={() => this.props.editTodo(rowData, rowID)}>
        <View style={styles.todo}>
          <Text style={[...textStyles, item.complete && styles.strikeThrough]}>
             {item.text}
          </Text>
          <Text style={textStyles}>
            {this.isDueIn().value}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

var styles = {
  ...globalStyles,

  todo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)'
  },

  text: {
    color: '#222222',
  },

  body: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
  },

  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    marginLeft: 0,
    marginRight: 0,
  },

  warnSoon: {
    color: '#E5DA3F'
  },

  warnIminent: {
    color: '#F47216',
  },

  warnPastDue: {
    color: '#DB4141'
  },

  completed: {
    color: '#5bbd72'
  },

  strikeThrough: {
    textDecorationLine: 'line-through'
  }
}
