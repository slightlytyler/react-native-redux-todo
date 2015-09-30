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

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
        {
          id: 1,
          text: 'This is the first todo',
          complete: true
        }, {
          id: 2,
          text: 'This is the second todo',
          complete: false
        }, {
          id: 3,
          text: 'This is the third todo',
          complete: false
        }
      ])
    };
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TodoItem item={rowData} />}
        style={styles.todosList}
        contentContainerStyle={styles.todosListContainer}
      />
    )
  }
}
