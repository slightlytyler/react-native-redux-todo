'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'
import shouldPureComponentUpdate from 'react-pure-render/function'

import { deleteProject } from 'pods/todos/actions'
import ProjectList from './components/List'
import AddNewButton from 'components/AddNewButton'

import styles from 'styles/styles'

var {
  View,
  Text,
  AlertIOS
} = React;

export class ProjectsIndexComponent extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  newProject() {
    // this.props.navigator.push(NewProjectRoute());
  }

  editProject() {

  }

  selectProject() {

  }

  render() {
    const { projects } = this.props;

    return (
      <View style={{flex: 1}}>
        <ProjectList projects={projects}
                     editProject={this.editProject.bind(this)}
                     selectProject={this.selectProject.bind(this)} />

        <AddNewButton title="Add New Project"
                      onPress={() => this.newProject()} />
      </View>
    )
  }
}

export const ProjectsIndexContainer = connect(state => {
  return {
    projects: state.projects || [
      {
        title: 'Test Project 1',
        subTitle: 'Sub title yeah'
      },
      {
        title: 'Test Project 2',
        subTitle: 'Sub title yeah'
      }
    ]
  };
})(ProjectsIndexComponent);
