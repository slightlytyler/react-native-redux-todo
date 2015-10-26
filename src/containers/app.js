'use strict'

import {
  Component,
  StatusBarIOS
} from 'react-native'
import { Provider } from 'react-redux/native'

import configureStore from '../configureStore'

import Nav from 'components/Nav';

var store = configureStore();

export default class ReactNativeTodo extends Component {
  render() {
    StatusBarIOS.setStyle('light-content');

    return (
      <Provider store={store}>
        {() => <Nav />}
      </Provider>
    )
  }
}