'use strict'

import {
  Component,
  PropTypes,
  View,
  TouchableHighlight,
  Text
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function';
import moment from 'moment';

import itemStyles from 'styles/Item'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class TodoItem extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  isDueIn() {
    const date = moment(this.props.item.date);
    const dueIn = date.diff(moment());
    const second = 1000,
          minute = 60 * second,
          hour = 60 * minute;

    return {
      value: date.fromNow(),
      oneHour: dueIn < hour,
      fifteenMinutes: dueIn < (15 * minute),
      pastDue: dueIn <= 0
    }
  }
  render() {
    const {
      item,
      toggleComplete,
      editTodo
    } = this.props;

    const textStyles = [styles.text, item.complete && styles.completed];

    return(
      <TouchableHighlight onPress={() => toggleComplete(item.id)}
                          onLongPress={() => editTodo(item)}>
        <View style={styles.container}>
          <View style={[styles.checkbox, item.complete && styles.completed]}>
            <Icon name="check"
                  style={[styles.checkmark, !item.complete && styles.hidden]} />
          </View>
          <Text style={[styles.body, textStyles]}
                numberOfLines={3}>
             {item.text}
          </Text>
          <Text style={[textStyles, styles.due]}>
            {this.isDueIn().value}
          </Text>
          <Icon name={item.notificationsEnabled ? "star" : "star-o"}
                style={[styles.important, item.complete && styles.completed]} />
        </View>
      </TouchableHighlight>
    )
  }
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

var styles = {
  ...itemStyles,

  due: {
    flex: 2,
    fontSize: 10
  },

  important: {
    flex: 0,

    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)'
  },

  hidden: {
    color: 'transparent'
  },

  completed: {
    opacity: .5
  }
};
