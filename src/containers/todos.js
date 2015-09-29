'use strict'

import React from 'react-native'
import { connect, dispatch } from 'react-redux/native'

import MainComponent from './../components/Main'

let {
  StyleSheet,
  Text,
  View,
} = React

export default class TodosApp extends React.Component {
  render() {
    return (
      <MainComponent></MainComponent>
    )
  }
}
