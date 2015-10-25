'use strict'

import {
  Component,
  PropTypes,
  View,
  Text,
  AlertIOS
} from 'react-native'

import { compose } from 'redux'
import shouldPureComponentUpdate from 'react-pure-render/function'

import ProjectList from '../components/List'
import AddNewButton from 'components/AddNewButton'

import styles from 'styles/styles'

export default class ProjectsIndexComponent extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  newProject() {
    const { navigator, routes } = this.props;
    const { NewProjectRoute } = routes;

    navigator.push(NewProjectRoute());
  }

  editProject(item) {
    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => this.openProject(item) },
        { text: 'Delete', onPress: () => this.deleteProject(item) },
        { text: 'Cancel' }
      ]
    );
  }

  openProject(item) {
    const { navigator, routes } = this.props;
    const { EditProjectRoute } = routes;

    navigator.push(EditProjectRoute(item));
  }

  deleteProject(id) {
    const { dispatch, actions } = this.props;
    const { deleteProject } = actions;

    compose(dispatch, deleteProject)(id);
  }

  selectProject(project) {
    const { dispatch, navigator, actions, routes } = this.props;
    const { selectProject } = actions;
    const { TodosIndexRoute } = routes;

    const { id, title, subTitle } = project;

    compose(dispatch, selectProject)(id);
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

ProjectsIndexComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,

  projects: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    deleteProject: PropTypes.func.isRequired,
    selectProject: PropTypes.func.isRequired
  }),
  routes: PropTypes.shape({
    NewProjectRoute: PropTypes.func.isRequired,
    EditProjectRoute: PropTypes.func.isRequired,
    TodosIndexRoute: PropTypes.func.isRequired
  })
};