'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'
import shouldPureComponentUpdate from 'react-pure-render/function'

import { deleteProject, selectProject } from 'pods/projects/actions'
import { deleteTodos } from 'pods/todos/actions'
import ProjectList from './components/List'
import AddNewButton from 'components/AddNewButton'
import { NewProjectRoute, EditProjectRoute } from 'pods/projects/routes'
import { TodosIndexRoute } from 'pods/todos/routes'

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
    this.props.dispatch(deleteTodos(_.keys(this.props.todosByProject[id])));
  }

  selectProject(project) {
    this.props.dispatch(selectProject(project.id));
    this.props.navigator.push(TodosIndexRoute(project.title, project.subTitle));
  }

  render() {
    const { projects, todosByProject } = this.props;

    return (
      <View style={{flex: 1}}>
        <ProjectList projects={projects}
                     todosByProject={todosByProject}
                     editProject={this.editProject.bind(this)}
                     selectProject={this.selectProject.bind(this)} />

        <AddNewButton title="Add New Project"
                      onPress={() => this.newProject()} />
      </View>
    )
  }
}

export const ProjectsIndexContainer = connect(state => {
  const { projects, todos } = state;

  const todosByProject = _.mapValues(projects.entities, project => {
    return _.pick(todos.entities, todo =>
      todo.project === project.id
    )
  });

  const projectsWithComplete = _.mapValues(projects.entities, project => {
    let complete = _.every(todosByProject[project.id], todo =>
      todo.complete
    );

    return Object.assign({}, project, {
      complete: complete
    });
  });


  return {
    projects: projectsWithComplete,
    todosByProject: todosByProject
  };
})(ProjectsIndexComponent);
