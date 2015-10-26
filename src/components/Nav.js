'use strict'

import {
  Component,
  View,
  ScrollView,
  Navigator,
  Image,
  StyleSheet
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'
import { BlurView } from 'react-native-blur'

import { NavBar, routeMapper } from 'components/NavBar'
import { ProjectsIndexRoute } from 'pods/projects/routes'

export default class Nav extends Component {
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
      <ScrollView style={styles.container}
                  contentContainerStyle={{flex: 1}}
                  keyboardShouldPersistTaps={false}
                  automaticallyAdjustContentInsets={false}
                  scrollEnabled={false}>
        <Image source={require('image!bg')} style={styles.bg}>
          <BlurView blurType="dark" style={{flex: 1}}>
            <Navigator  ref="nav"
                        initialRoute={ProjectsIndexRoute()}
                        renderScene={this.renderScene}
                        navigationBar={<NavBar routeMapper={routeMapper} />} />
          </BlurView>
        </Image>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  bg: {
    flex: 1,
    resizeMode: 'cover'
  },

  scene: {
    flex: 1,
    padding: 20,
    paddingTop: 128
  }
});