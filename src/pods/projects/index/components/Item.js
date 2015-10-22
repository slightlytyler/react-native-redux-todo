'use strict'

import React, { PixelRatio } from 'react-native'
import shouldPureComponentUpdate from 'react-pure-render/function';

import globalStyles from 'styles/styles'

var {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} = React

import Icon from 'react-native-vector-icons/FontAwesome'

export default class ProjectItem extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const {
      rowData,
      rowID,
      editProject,
      selectProject
    } = this.props;
    const item = rowData;

    const textStyles = [styles.text, item.complete && styles.completed];

    return(
      <TouchableHighlight onPress={() => this.props.selectProject(item.id)}
                          onLongPress={() => this.props.editProject(rowData, rowID)}>
        <View style={styles.container}>
          <View style={styles.checkbox}>
            <Icon name="check" style={[styles.checkmark, !item.complete && styles.hidden]} />
          </View>
          <Text style={[styles.body, textStyles]}>
             {item.title}
          </Text>
          <View>
            <Icon name="chevron-right" style={styles.arrow} />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

var styles = {
  ...globalStyles,

  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingTop: 12,
    paddingBottom: 12,

    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)'
  },

  text: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'left'
  },

  checkbox: {
    flex: 0,
    marginRight: 14,
    padding: 3,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderWidth: 3 / PixelRatio.get(),
    borderRadius: 5
  },

  checkmark: {
    fontSize: 8,
    color: 'rgba(255, 255, 255, 0.6)'
  },

  hidden: {
    opacity: 0
  },

  body: {
    flex: 5
  },

  arrow: {
    marginRight: 10,

    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)'
  }
}
