'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'

import { toggleComplete } from '../actions/todos';

import TodoItem from './TodoItem'
import styles from '../styles/styles'

var {
  StyleSheet,
  ListView,
} = React

@connect()
export default class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  toggleComplete(id) {
    this.props.dispatch(toggleComplete(id));
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(this.props.todos.toJS())}
        renderRow={(rowData) =>
                    <TodoItem item={rowData}
                              toggleComplete={this.toggleComplete.bind(this)} />}
        style={styles.todosList}
        contentContainerStyle={styles.todosListContainer}
      />
    )
  }
}
