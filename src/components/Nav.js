import React from 'react-native';

import { NavBar, routeMapper } from 'components/NavBar';
import TodosIndexRoute from 'pods/todos/index/route';

var {
  View,
  Navigator,
  StyleSheet
} = React;

export default class Nav extends React.Component {
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
    paddingTop: 44,
    backgroundColor: 'white',
  }
});