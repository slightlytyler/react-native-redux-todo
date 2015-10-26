'use strict'

import {
  Component,
  PropTypes,
  View,
  Text,
  AlertIOS
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'

import ProjectList from 'pods/projects/components/List'
import AddNewButton from 'components/AddNewButton'

export default class ProjectsIndexComponent extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  editProject(item) {
    const { openProject, deleteProject } = this.props.actions;

    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => openProject(item) },
        { text: 'Delete', onPress: () => deleteProject(item.id) },
        { text: 'Cancel' }
      ]
    );
  }

  render() {
    const { projects, actions } = this.props;
    const { newProject, selectProject } = actions;

    return (
      <View style={{flex: 1}}>
        <ProjectList projects={projects}
                     editProject={this.editProject.bind(this)}
                     selectProject={selectProject} />

        <AddNewButton title="Add New Project"
                      onPress={newProject} />
      </View>
    )
  }
}

ProjectsIndexComponent.propTypes = {
  projects: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    newProject: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    selectProject: PropTypes.func.isRequired,
    openProject: PropTypes.func.isRequired
  }),
};