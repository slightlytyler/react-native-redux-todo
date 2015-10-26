'use strict'

import {
  Component,
  Navigator,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'

export class NavBar extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  updateProgress(progress, fromIndex, toIndex) {
    this._nav.updateProgress(progress, fromIndex, toIndex);
  }

  render() {
    return (
      <View style={styles.navBarContainer}>
        <View style={styles.statusBar} />
        <Navigator.NavigationBar {...this.props}
                                 ref={(nav) => { this._nav = nav; }}
                                 style={styles.navBar} />
      </View>
    );
  }
}

export const routeMapper = {
  LeftButton: function(route, navigator, index, navState) {
    return null;
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    const titleStyle = [
      styles.navBarText,
      styles.navBarTitleText
    ];
    const subTitleStyle = [
      styles.navBarText,
      styles.navBarSubTitleText
    ];

    return (
      <View style={styles.navBarTitle}>
        <Text style={titleStyle}>
          {route.title || route.name}
        </Text>

        <Text style={subTitleStyle}>
          {route.subTitle}
        </Text>
      </View>
    );
  }
};

const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

var styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: NAV_HEIGHT,
    margin: 20,
    marginTop: 42,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navBarText: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '300'
  },
  navBarTitleText: {
    color: 'white',
    fontSize: 40,
  },
  navBarSubTitleText: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  navBarTitle: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    height: NAV_BAR_HEIGHT,
    justifyContent: 'center'
  },
  navBarRightButton: {
    paddingRight: 10,
    height: NAV_BAR_HEIGHT,
    justifyContent: 'center'
  },
  navBarButtonText: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});