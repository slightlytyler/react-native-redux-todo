'use strict';

import React from 'react-native';

var { StyleSheet } = React;

export default StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',

    height: 50,
    marginBottom: 0,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 6,
  },

  buttonText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    alignSelf: 'center'
  }
});