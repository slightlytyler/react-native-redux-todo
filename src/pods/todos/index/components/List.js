'use strict'

import React from 'react-native'

import TodoItem from './Item'
import styles from 'styles/styles'

var {
  ListView,
} = React

export default class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  render() {
    const { todos, toggleComplete, editTodo } = this.props;

    return(
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(todos.toJS())}
        renderRow={(rowData, rowID) =>
                    <TodoItem rowData={rowData}
                              rowID={rowID}
                              editTodo={editTodo}
                              toggleComplete={toggleComplete} />}
        style={styles.todosList}
        contentContainerStyle={styles.todosListContainer}
      />
    )
  }
}
