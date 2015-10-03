'use strict'

import React from 'react-native'

import styles from '../styles/styles'
import TodoItem from './TodoItem'

var {
  StyleSheet,
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
    return(
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(this.props.todos.toJS())}
        renderRow={(rowData) => <TodoItem item={rowData} />}
        style={styles.todosList}
        contentContainerStyle={styles.todosListContainer}
      />
    )
  }
}
