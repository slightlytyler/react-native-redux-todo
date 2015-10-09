import React from 'react-native'

var {
  Navigator,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} = React;

export class NavBar extends React.Component {
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
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];

    return (
      <TouchableOpacity style={styles.navBarLeftButton}
                        onPress={() => navigator.pop()}>
        <Text style={styles.navBarButtonText}>
          {previousRoute.title || previousRoute.name}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    const RightButton = route.RightButton;

    if (RightButton) {
      return (
        <TouchableOpacity style={styles.navBarRightButton}
                          onPress={() => RightButton.onPress()}>
          <Text style={styles.navBarButtonText}>
            {RightButton.text}
          </Text>
        </TouchableOpacity>
      );
    }

    return null;
  },

  Title: function(route, navigator, index, navState) {
    const titleStyle = [
      styles.navBarText,
      styles.navBarTitleText
    ];

    return (
      <Text style={titleStyle}>
        {route.title || route.name}
      </Text>
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
    backgroundColor: '#46baec',
    paddingBottom: 5,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1 / React.PixelRatio.get(),
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
    textAlign: 'center',
  },
  navBarTitleText: {
    color: '#373e4d',
    fontWeight: '500',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 12,
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