'use strict'

import React from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function'

import { NavBar, routeMapper } from 'components/NavBar'
import { ProjectsIndexRoute } from 'pods/projects/routes'

var {
  View,
  Navigator,
  StyleSheet
} = React;

export default class Nav extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  renderScene(route, navigator) {
    const Component = route.component;

    return (
      <View style={styles.scene}>
        <Component navigator={navigator} route={route} {...route.passProps} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator  ref="nav"
                    initialRoute={ProjectsIndexRoute()}
                    renderScene={this.renderScene}
                    navigationBar={<NavBar routeMapper={routeMapper} />} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  scene: {
    flex: 1,
    padding: 20,
    paddingTop: 128
  }
});