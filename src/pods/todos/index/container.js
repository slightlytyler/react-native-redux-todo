'use strict'

import React from 'react-native'
import { connect } from 'react-redux/native'
import shouldPureComponentUpdate from 'react-pure-render/function';
import moment from 'moment'

import { filterTypes } from 'pods/todos/constants'
import { deleteTodo, toggleComplete, filterTodos } from 'pods/todos/actions'
import TodoList from './components/List'
import TodosHeader from './components/Header'
import { EditTodoRoute, NewTodoRoute} from 'pods/todos/routes';

import styles from 'styles/styles';

var {
  View,
  Text,
  TouchableHighlight,
  AlertIOS
} = React

const {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETE
} = filterTypes;

export class TodosIndexComponent extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  sortTodos(todos) {
    return todos.sort((a, b) => {
      let keyA = moment(a.date),
          keyB = moment(b.date);

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  editTodo(rowData, rowID) {
    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => this.openTodo(rowData, rowID) },
        { text: 'Delete', onPress: () => this.deleteTodo(rowData.id) },
        { text: 'Cancel' }
      ]
    );
  }

  deleteTodo(id) {
    this.props.dispatch(deleteTodo(id));
  }

  openTodo(rowData, rowID) {
    this.props.navigator.push(EditTodoRoute(rowData, rowID));
  }

  newTodo() {
    this.props.navigator.push(NewTodoRoute())
  }

  toggleComplete(id) {
    this.props.dispatch(toggleComplete(id));
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
        <TodosHeader filter={filter}
                     filterTodos={this.filterTodos.bind(this)}
                     toggleAll={this.toggleAll.bind(this)} />

        <TodoList todos={this.sortTodos(todos)}
                  editTodo={this.editTodo.bind(this)}
                  toggleComplete={this.toggleComplete.bind(this)}
                  filterTodos={this.filterTodos.bind(this)} />

        <TouchableHighlight
            style={[styles.button, styles.newButton]}
            underlayColor='#99d9f4'
            onPress={this.newTodo.bind(this)}>
            <Text style={styles.buttonText}>+ New Todo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export const TodosIndexContainer = connect(state => {
  const todos = state.todos.list || [];
  const filter = state.todos.filter || SHOW_ALL;
  const filterBool = filter === SHOW_COMPLETE;

  return {
      todos: filter === SHOW_ALL ?
             todos :
             todos.filter(todo => todo.complete === filterBool),
      filter: filter
    };
})(TodosIndexComponent);
