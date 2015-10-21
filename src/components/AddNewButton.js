'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function'

var {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} = React;

export default class AddNewButton extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { title, onPress } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.container}
                          activeOpacity=".6"
                          onPress={() => onPress()}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>+</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 48,
    height: 48,
    marginBottom: 10,

    borderWidth: 5,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 100,
  },

  iconText: {
    marginTop: -5,
    fontSize: 48,
    fontWeight: '200',
    color: 'rgba(255, 255, 255, 0.8)',
  },

  title: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.4)',
  }
});