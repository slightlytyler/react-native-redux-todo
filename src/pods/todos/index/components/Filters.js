'use strict'

import React from 'react-native'

var {
  StyleSheet,
  SegmentedControlIOS,
  Text,
  View
} = React

var styles = StyleSheet.create({
  controls: {
    margin: 10,
    marginTop: 24
  }
});

const filters = ['all', 'active', 'completed'];

export default class TodoFilters extends React.Component {
  render() {
    const { currentFilter, filterTodos } = this.props;

    return(
      <SegmentedControlIOS style={styles.controls}
                           values={filters.map(filter => filter.capitalize())}
                           onValueChange={filterTodos}
                           selectedIndex={filters.indexOf(currentFilter)} />
    )
  }
}
