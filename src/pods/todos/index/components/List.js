'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function';

import TodoItem from './Item'

var {
  ListView,
  StyleSheet
} = React

export default class TodoList extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  render() {
    const {
      todos,
      filter,
      editTodo,
      toggleComplete,
      filterTodos
    } = this.props;

    return(
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(todos)}
        initialListSize={15}
        renderRow={(rowData, rowID) =>
                    <TodoItem rowData={rowData}
                              rowID={rowID}
                              editTodo={editTodo}
                              toggleComplete={toggleComplete} />}
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
