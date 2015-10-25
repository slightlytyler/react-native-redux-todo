'use strict'

import {
  Component,
  PropTypes,
  View,
  AlertIOS
} from 'react-native'

import { compose } from 'redux'
import shouldPureComponentUpdate from 'react-pure-render/function'

import moment from 'moment'

import TodoList from 'pods/todos/components/List'
import TodosHeader from 'pods/todos/components/Header'
import AddNewButton from 'components/AddNewButton'

import styles from 'styles/styles'


export default class TodosIndexComponent extends Component {
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
    return _.pick(todos, todo => todo.complete);
  }

  editTodo(item) {
    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        { text: 'Edit', onPress: () => this.openTodo(item) },
        { text: 'Delete', onPress: () => this.deleteTodos([item.id]) },
        { text: 'Cancel' }
      ]
    );
  }

  deleteTodos(id) {
    const { dispatch, actions } = this.props;
    const { deleteTodos } = actions;

    compose(dispatch, deleteTodos)(id);
  }

  clearCompleted() {
    const { todos, dispatch, actions } = this.props;
    const { deleteTodos } = actions;

    const completedTodos = this.completedTodos(todos);

    compose(dispatch, deleteTodos, _.keys)(completedTodos);
  }

  newTodo() {
    const { navigator, routes } = this.props;
    const { NewTodoRoute } = routes;

    navigator.push(NewTodoRoute());
  }

  openTodo(rowData) {
    const { navigator, routes } = this.props;
    const { EditTodoRoute } = routes;

    navigator.push(EditTodoRoute(rowData));
  }

  toggleComplete(id) {
    const { dispatch, actions } = this.props;
    const { toggleComplete } = actions;

    compose(dispatch, toggleComplete)(id);
  }

  toggleAll() {
    const { todos, dispatch, actions } = this.props;
    const { toggleComplete } = actions;

    compose(dispatch, toggleComplete, _.keys)(todos);
  }

  filterTodos(filter) {
    const { dispatch, actions } = this.props;
    const { filterTodos } = actions;

    compose(dispatch, filterTodos)(filter);
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

TodosIndexComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,

  todos: PropTypes.object.isRequired,
  constants: PropTypes.shape({
    filterTypes: PropTypes.object
  }),
  actions: PropTypes.shape({
    deleteTodos: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    filterTodos: PropTypes.func
  }),
  routes: PropTypes.shape({
    NewTodoRoute: PropTypes.func.isRequired,
    EditTodoRoute: PropTypes.func.isRequired
  })
};