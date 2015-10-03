'use strict'

import React from 'react-native'
import { Provider } from 'react-redux/native'
import { fromJS } from 'immutable'

import configureStore from '../configureStore'

import styles from '../styles/styles';
import Todos from './todos'
import { setState } from '../actions/todos';

var { NavigatorIOS } = React;

var store = configureStore();

store.dispatch(setState(fromJS({
  todos: [{
    id: 1,
    text: 'Learn react and redux',
    complete: true
  }, {
    id: 2,
    text: '...',
    complete: true
  }, {
    id: 3,
    text: 'Profit',
    complete: false
  }]
})));

export default class react_native_starter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: Todos, title: 'Todos'}}/>
        }
      </Provider>
    )
  }
}
