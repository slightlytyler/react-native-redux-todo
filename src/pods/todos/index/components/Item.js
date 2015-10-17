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

    const textStyles = [styles.text, item.complete && styles.completed];

    return(
      <TouchableHighlight onPress={() => this.props.toggleComplete(item.id)}
                          onLongPress={() => this.props.editTodo(rowData, rowID)}>
        <View style={styles.todo}>
          <Text style={textStyles}>
             {item.text}
          </Text>
          <Text style={[textStyles, styles.due]}>
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
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingTop: 12,
    paddingBottom: 12,

    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)'
  },

  text: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)'
  },

  due: {
    fontSize: 12
  },

  body: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
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
    opacity: .5
  }
}
