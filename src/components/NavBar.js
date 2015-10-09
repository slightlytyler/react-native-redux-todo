import React from 'react-native'

var {
  Navigator,
  TouchableOpacity,
  Text,
  StyleSheet
} = React;

export class NavBar extends React.Component {
  updateProgress(progress, fromIndex, toIndex) {
    this._nav.updateProgress(progress, fromIndex, toIndex);
  }

  render() {
    return <Navigator.NavigationBar {...this.props}
                                    ref={(nav) => { this._nav = nav; }}
                                    style={styles.navBar} />
  }
}

export const routeMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}>
        <Text>
          {previousRoute.title || previousRoute.name}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text>
        {route.title || route.name} [{index}]
      </Text>
    );
  }
};

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    height: 64
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373e4d',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890ff',
  }
});