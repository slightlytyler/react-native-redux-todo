'use strict';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: 24,
  },

  form: {
    flex: 1,
  },

  field: {
    marginBottom: 18
  },

  label: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '400',

    color: 'rgba(255, 255, 255, .8)',
  },

  singleLineInput: {
    padding: 10,
    height: 40,

    fontSize: 14,
    color: 'rgba(255, 255, 255, .8)',

    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6
  },

  multiLineInput: {
    padding: 10,
    height: 200,

    fontSize: 14,
    color: 'rgba(255, 255, 255, .8)',

    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6
  }
});