'use strict';

import React from 'react-native';

var { StyleSheet } = React;

export default StyleSheet.create({
  todosContainer: {
    flex: 1
  },

  todosList: {
    flex: 1
  },

  todosListContainer: {
    flex: 1,
    marginTop: 0
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },

  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  saveButton: {
    marginTop: 24,
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
  },

  newButton: {
    marginBottom: 0,
    borderRadius: 0,
  },

  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    marginLeft: 0,
    marginRight: 0,
  }
});