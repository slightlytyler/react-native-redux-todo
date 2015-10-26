'use strict'

import {
  Component,
  PropTypes,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'

export default class SaveButton extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { title, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.button}
                        onPress={onPress}
                        activeOpactiy={.6}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

SaveButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

var styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',

    height: 50,
    marginBottom: 0,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 6,
  },

  buttonText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    alignSelf: 'center'
  }
});