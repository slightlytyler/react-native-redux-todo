import React from 'react-native';

import { NavBar, routeMapper } from 'components/NavBar';
import { TodosIndexContainer } from 'pods/todos/index/container'
import { TodoFormContainer } from 'pods/todos/form/container'

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
                  initialRoute={{
                    name: 'todos.index',
                    title: 'Todos',
                    component: TodosIndexContainer,
                    RightButton: {
                      text: 'New',
                      onPress: () =>
                        this.refs.nav.push({
                          name: 'New Todo',
                          component: TodoFormContainer
                        })
                    }
                  }}
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