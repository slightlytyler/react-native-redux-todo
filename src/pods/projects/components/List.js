'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function';

import ProjectItem from './Item'

var {
  ListView,
  StyleSheet
} = React

export default class ProjectList extends React.Component {
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

var styles = StyleSheet.create({
  list: {
    flex: 1
  }
});
