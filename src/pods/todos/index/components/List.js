'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function';

import TodoItem from './Item'
import TodoFilters from './Filters'

import styles from 'styles/styles'

var {
  ListView,
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
        renderRow={(rowData, rowID) =>
                    <TodoItem rowData={rowData}
                              rowID={rowID}
                              editTodo={editTodo}
                              toggleComplete={toggleComplete} />}
        renderHeader={() =>
                      <TodoFilters currentFilter={filter}
                                   filterTodos={filterTodos} />}
        style={styles.todosList}
        contentContainerStyle={styles.todosListContainer}
      />
    )
  }
}
