'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function'

import ProjectList from '../components/List'
import AddNewButton from 'components/AddNewButton'

import styles from 'styles/styles'

var {
  View,
  Text,
  AlertIOS
} = React;

export default class ProjectsIndexComponent extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  newProject() {
    const { navigator, NewProjectRoute } = this.props;

    navigator.push(NewProjectRoute());
  }

  editProject(rowData, rowID) {
    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => this.openProject(rowData) },
        { text: 'Delete', onPress: () => this.deleteProject(rowData.id) },
        { text: 'Cancel' }
      ]
    );
  }

  openProject(rowData) {
    const { navigator, EditProjectRoute } = this.props;

    navigator.push(EditProjectRoute(rowData));
  }

  deleteProject(id) {
    const { dispatch, deleteProject } = this.props;

    dispatch(deleteProject(id));
  }

  selectProject(project) {
    const {
      dispatch,
      selectProject,
      navigator,
      TodosIndexRoute
    } = this.props;
    const { id, title, subTitle } = project;

    dispatch(selectProject(id));
    navigator.push(TodosIndexRoute(title, subTitle));
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