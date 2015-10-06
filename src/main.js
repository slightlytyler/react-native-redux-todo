'use strict'

import React from 'react-native'
import App from 'containers/app'

String.prototype.capitalize = function() {
  return this.replace(/(^|\/)([a-z])/g, (match) => {
    return match.toUpperCase();
  });
}

var {
  AppRegistry
} = React

AppRegistry.registerComponent('react_native_starter', () => App)
