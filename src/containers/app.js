'use strict'

import React from 'react-native'
import { Provider } from 'react-redux/native'

import configureStore from '../configureStore'

import ExampleApp from './example'
import TodosApp from './todos'

import styles from '../styles/styles';

var { NavigatorIOS } = React;



export default class react_native_starter extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        {() => <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: TodosApp, title: 'Todos'}}/>}
      </Provider>
    )
  }
}
