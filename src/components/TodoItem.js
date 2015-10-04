'use strict'

import React from 'react-native'
import styles from '../styles/styles';

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} = React

export default class TodoItem extends React.Component {
  render() {
    const { rowData, rowID } = this.props;
    const item = rowData

    return(
      <View>
        <TouchableHighlight onPress={() => this.props.toggleComplete(item.id)}
                            onLongPress={() => this.props.editTodo(rowData, rowID)}>
          <View style={styles.todo}>
            <Text style={[styles.text, item.complete && styles.completed]}>
               {item.text}
            </Text>
          </View>
        </TouchableHighlight>

        <View style={styles.hr}/>
      </View>
    )
  }
}
