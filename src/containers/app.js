'use strict'

import React from 'react-native'
import { Provider } from 'react-redux/native'

import configureStore from '../configureStore'

import styles from '../styles/styles';

import Todos from './todos'

var { NavigatorIOS } = React;



export default class react_native_starter extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        {() => <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: Todos, title: 'Todos'}}/>
        }
      </Provider>
    )
  }
}
