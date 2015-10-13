'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function'

import { filterTypes } from 'pods/todos/constants'

var {
  StyleSheet,
  SegmentedControlIOS,
  Text,
  View
} = React

const {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETE
} = filterTypes;

const todoFilters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETE];

const todoFilterTitles = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETE]: 'Complete'
};

export default class TodoFilters extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { currentFilter, filterTodos } = this.props;

    return(
      <SegmentedControlIOS style={styles.controls}
                           tintColor="#46baec"
                           values={todoFilters.map(filter => todoFilterTitles[filter])}
                           onValueChange={(value) => filterTodos(
                              todoFilters.filter(todoFilter => todoFilterTitles[todoFilter] === value)[0]
                          )}
                           selectedIndex={todoFilters.indexOf(currentFilter)} />
    )
  }
}

var styles = StyleSheet.create({
  controls: {
    margin: 10,
    marginTop: 32
  }
});
