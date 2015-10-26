'use strict';

import { StyleSheet, PixelRatio } from 'react-native'

export default StyleSheet.create({
  container: {
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
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'left'
  },

  checkbox: {
    flex: 0,
    marginRight: 14,
    padding: 3,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderWidth: 3 / PixelRatio.get(),
    borderRadius: 5
  },

  checkmark: {
    fontSize: 8,
    color: 'rgba(255, 255, 255, 0.6)'
  },

  hidden: {
    opacity: 0
  },

  body: {
    flex: 5,
    marginRight: 14
  }
});