'use strict'

import {
  Component,
  PropTypes,
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  PixelRatio
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function';
import moment from 'moment';

import globalStyles from 'styles/styles'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class TodoItem extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  isDueIn() {
    const date = moment(this.props.rowData.date);
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
    const { rowData, rowID } = this.props;
    const item = rowData;

    const textStyles = [styles.text, item.complete && styles.completed];

    return(
      <TouchableHighlight onPress={() => this.props.toggleComplete(item.id)}
                          onLongPress={() => this.props.editTodo(item)}>
        <View style={styles.todo}>
          <View style={[styles.checkbox, item.complete && styles.completed]}>
            <Icon name="check" style={[styles.checkmark, !item.complete && styles.hidden]} />
          </View>
          <Text style={[styles.body, textStyles]}>
             {item.text}
          </Text>
          <Text style={[textStyles, styles.due]}>
            {this.isDueIn().value}
          </Text>
          <Icon name={item.notificationsEnabled ? "star" : "star-o"} style={[styles.important, item.complete && styles.completed]} />
        </View>
      </TouchableHighlight>
    )
  }
}

TodoItem.propTypes = {
  rowData: PropTypes.object.isRequired,
  rowID: PropTypes.string.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

var styles = {
  ...globalStyles,

  todo: {
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

  body: {
    flex: 5
  },

  due: {
    flex: 2,
    fontSize: 12
  },

  important: {
    flex: 0,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)'
  },

  hidden: {
    color: 'transparent'
  },

  warnSoon: {
    color: '#E5DA3F'
  },

  warnIminent: {
    color: '#F47216',
  },

  warnPastDue: {
    color: '#DB4141'
  },

  completed: {
    opacity: .5
  }
}
