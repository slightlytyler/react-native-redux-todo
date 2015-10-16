'use strict'

import React from 'react-native';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { NavBar, routeMapper } from 'components/NavBar';
import { TodosIndexRoute } from 'pods/todos/routes';

var {
  View,
  Navigator,
  StyleSheet
} = React;

export default class Nav extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  renderScene(route, navigator) {
    const Component = route.component;

    return <View style={styles.scene}>
        <Component navigator={navigator} route={route} {...route.passProps} />
      </View>
  }

  render() {
    return (
      <Navigator  ref="nav"
                  initialRoute={TodosIndexRoute(() => this.refs.nav)}
                  renderScene={this.renderScene}
                  navigationBar={<NavBar routeMapper={routeMapper} />} />
    );
  }
}

var styles = StyleSheet.create({
  scene: {
    flex: 1,
    padding: 20,
    paddingTop: 128,
    backgroundColor: 'black'
  }
});