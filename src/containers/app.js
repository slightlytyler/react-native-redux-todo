'use strict'

import React from 'react-native'
import { Provider } from 'react-redux/native'
import { fromJS } from 'immutable'

import configureStore from '../configureStore'

import { setState } from 'pods/todos/actions'
import { NavBar, routeMapper } from 'components/NavBar';
import { TodosIndexContainer } from 'pods/todos/index/container'

var {
  View,
  Navigator,
  StyleSheet
} = React;

var store = configureStore();

store.dispatch(setState(fromJS({
  todos: {
    list: [{
      id: 1,
      text: 'Learn react and redux',
      complete: true
    }, {
      id: 2,
      text: '...',
      complete: true
    }, {
      id: 3,
      text: 'Profit',
      complete: false
    }],

    filter: 'all'
  }
})));

export default class react_native_starter extends React.Component {
  renderScene(route, navigator) {
    const Component = route.component;

    return <View style={styles.scene}>
        <Component navigator={navigator} route={route} {...route.passProps} />
      </View>
  }

  render() {
    return (
      <Provider store={store}>
        {() =>
          <Navigator  initialRoute={{
                        name: 'todos.index',
                        title: 'Todos',
                        component: TodosIndexContainer
                      }}
                      renderScene={this.renderScene}
                      navigationBar={<NavBar routeMapper={routeMapper} />} />
        }
      </Provider>
    )
  }
}

var styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 44,
    backgroundColor: '#EAEAEA',
  }
});