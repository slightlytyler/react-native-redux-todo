'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function'

import TodoFilters from './Filters'

var {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} = React

export default class TodosHeader extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const {
      filter,
      filterTodos,
      toggleAll,
      clearCompleted
    } = this.props;

    return(
      <View style={styles.header}>
        <TodoFilters currentFilter={filter}
                     filterTodos={filterTodos} />

        <View style={styles.toggles}>
          <TouchableOpacity style={styles.toggleButton}
                            onPress={toggleAll}>
            <Text style={styles.toggleButtonText}>Toggle All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.toggleButton}
                            onPress={clearCompleted}>
            <Text style={styles.toggleButtonText}>Clear Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  controls: {
    margin: 10,
    marginTop: 32
  },

  toggles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  toggleButton: {
    padding: 5,
    marginRight: 5,
    marginLeft: 5,

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 5
  },

  toggleButtonText: {
    fontSize: 10,
    color: '#999999'
  }
});
