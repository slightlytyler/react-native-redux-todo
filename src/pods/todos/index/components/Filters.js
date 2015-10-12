'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function';

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
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { currentFilter, filterTodos } = this.props;

    return(
      <SegmentedControlIOS style={styles.controls}
                           tintColor="#46baec"
                           values={filters.map(filter => filter.capitalize())}
                           onValueChange={filterTodos}
                           selectedIndex={filters.indexOf(currentFilter)} />
    )
  }
}
