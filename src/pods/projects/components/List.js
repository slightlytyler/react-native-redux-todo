'use strict'

import {
  Component,
  PropTypes,
  ListView,
  StyleSheet
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function';

import ProjectItem from './Item'

export default class ProjectList extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  render() {
    const {
      projects,
      editProject,
      selectProject
    } = this.props;

    return(
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(projects)}
        initialListSize={15}
        renderRow={(rowData, rowID) =>
                    <ProjectItem rowData={rowData}
                                 rowID={rowID}
                                 editProject={editProject}
                                 selectProject={selectProject} />}
        style={styles.list}
      />
    )
  }
}

ProjectList.propTypes = {
  projects: PropTypes.object.isRequired,
  editProject: PropTypes.func.isRequired,
  selectProject: PropTypes.func.isRequired
};

var styles = StyleSheet.create({
  list: {
    flex: 1
  }
});
