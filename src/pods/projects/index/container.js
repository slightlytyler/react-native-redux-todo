'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'
import shouldPureComponentUpdate from 'react-pure-render/function'

import { deleteProject } from 'pods/todos/actions'

import styles from 'styles/styles'

var {
  View,
  Text,
  AlertIOS
} = React;

export class ProjectsIndexComponent extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Test</Text>
      </View>
    )
  }
}

export const ProjectsIndexContainer = connect(state => {
  return {
    projects: state.projects
  };
})(ProjectsIndexComponent);
