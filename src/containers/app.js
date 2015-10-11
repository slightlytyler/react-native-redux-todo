'use strict'

import React from 'react-native'
import { Provider } from 'react-redux/native'

import configureStore from '../configureStore'

import Nav from 'components/Nav';

var store = configureStore();

export default class ReactNativeTodo extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Nav />}
      </Provider>
    )
  }
}