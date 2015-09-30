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
    return(
      <View>
        <TouchableHighlight>
          <View style={styles.todo}>
            <Text style={[styles.text, this.props.item.complete && styles.completed]}>
               {this.props.item.text}
            </Text>
          </View>
        </TouchableHighlight>

        <View style={styles.hr}/>
      </View>
    )
  }
}
