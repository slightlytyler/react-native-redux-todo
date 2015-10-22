'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'
import shouldPureComponentUpdate from 'react-pure-render/function'

import { deleteProject } from 'pods/projects/actions'
import ProjectList from './components/List'
import AddNewButton from 'components/AddNewButton'
import { NewProjectRoute, EditProjectRoute } from 'pods/projects/routes'

import styles from 'styles/styles'

var {
  View,
  Text,
  AlertIOS
} = React;

export class ProjectsIndexComponent extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  newProject() {
    this.props.navigator.push(NewProjectRoute());
  }

  editProject(rowData, rowID) {
    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => this.openProject(rowData, rowID) },
        { text: 'Delete', onPress: () => this.deleteProject(rowData.id) },
        { text: 'Cancel' }
      ]
    );
  }

  openProject(rowData, rowID) {
    this.props.navigator.push(EditProjectRoute(rowData, rowID));
  }

  deleteProject(id) {
    this.props.dispatch(deleteProject(id));
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
    projects: state.projects || []
  };
})(ProjectsIndexComponent);
