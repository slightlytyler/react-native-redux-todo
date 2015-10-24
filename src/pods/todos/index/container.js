'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'
import shouldPureComponentUpdate from 'react-pure-render/function'
import moment from 'moment'

import { filterTypes } from 'pods/todos/constants'
import { deleteTodos, toggleComplete, clearCompleted, filterTodos } from 'pods/todos/actions'
import TodoList from './components/List'
import TodosHeader from './components/Header'
import AddNewButton from 'components/AddNewButton'
import { NewTodoRoute, EditTodoRoute } from 'pods/todos/routes'

import styles from 'styles/styles'

var {
  View,
  AlertIOS
} = React;

const {
  SHOW_ALL,
  SHOW_COMPLETE
} = filterTypes;

export class TodosIndexComponent extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  sortTodos(todos) {
    return _.sortBy(todos, (a, b) => {
      let keyA = moment(a.date),
          keyB = moment(b.date);

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  completedTodos(todos) {
    return todos.filter(todo => todo.complete);
  }

  editTodo(rowData, rowID) {
    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => this.openTodo(rowData, rowID) },
        { text: 'Delete', onPress: () => this.deleteTodos([rowData.id]) },
        { text: 'Cancel' }
      ]
    );
  }

  deleteTodos(id) {
    this.props.dispatch(deleteTodos(id));
  }

  clearCompleted() {
    this.props.dispatch(deleteTodos(
      this.completedTodos(this.props.todos).map(todo => todo.id)
    ));
  }

  newTodo() {
    this.props.navigator.push(NewTodoRoute());
  }

  openTodo(rowData, rowID) {
    this.props.navigator.push(EditTodoRoute(rowData, rowID));
  }

  toggleComplete(id) {
    this.props.dispatch(toggleComplete([id]));
  }

  toggleAll() {
    this.props.dispatch(toggleComplete(this.props.todos.map(todo => todo.id)))
  }

  filterTodos(filter) {
    this.props.dispatch(filterTodos(filter));
  }

  render() {
    const { todos, filter } = this.props;

    return (
      <View style={{flex: 1}}>
        <TodoList todos={this.sortTodos(todos)}
                  editTodo={this.editTodo.bind(this)}
                  toggleComplete={this.toggleComplete.bind(this)}
                  filterTodos={this.filterTodos.bind(this)} />

        <AddNewButton title="Add New Task"
                      onPress={() => this.newTodo()} />
      </View>
    )
  }
}

export const TodosIndexContainer = connect(state => {
  const todos = state.todos.entities;
  const currentProject = state.projects.condition.currentProject;

  return {
    todos: _.pick(todos, todo =>
      todo.project === currentProject
    ) || {}
  };
})(TodosIndexComponent);
