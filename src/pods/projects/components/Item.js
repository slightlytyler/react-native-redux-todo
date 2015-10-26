'use strict'

import {
  Component,
  PropTypes,
  View,
  TouchableHighlight,
  Text,
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function';

import Icon from 'react-native-vector-icons/FontAwesome'

import itemStyles from 'styles/Item'

export default class ProjectItem extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const {
      item,
      editProject,
      selectProject
    } = this.props;

    const textStyles = [styles.text, item.complete && styles.completed];

    return(
      <TouchableHighlight onPress={() => this.props.selectProject(item)}
                          onLongPress={() => this.props.editProject(item)}>
        <View style={styles.container}>
          <View style={styles.checkbox}>
            <Icon name="check" style={[styles.checkmark, !item.complete && styles.hidden]} />
          </View>
          <Text style={[styles.body, textStyles]}
                numberOfLines={3}>
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

ProjectItem.propType = {
  item: PropTypes.object.isRequired,
  editProject: PropTypes.func.isRequired,
  selectProject: PropTypes.func.isRequired
};

var styles = {
  ...itemStyles,

  arrow: {
    paddingRight: 10,

    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)'
  }
};
