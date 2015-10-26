'use strict'

import {
  Component,
  PropTypes,
  View,
  Text,
  TextInput,
  SwitchIOS,
  StyleSheet,
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'
import moment from 'moment'

import TextInputDatePicker from 'components/TextInputDatePicker'
import SaveButton from 'components/SaveButton'

export default class TodoFormComponent extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props, context) {
    super(props, context);

    const { item } = this.props;
    const currentDate = new Date();

    this.state = {
      text: item ? item.text : '',
      date: item ? moment(item.date).toDate() : moment(currentDate).add(1, 'hour').toDate(),
      currentDate: currentDate,
      notifactionsEnabled: item ? item.notificationsEnabled : false
    };
  }

  submit() {
    const { item, currentProject, actions } = this.props;
    const { submit } = actions;
    const { text, date,  notifactionsEnabled } = this.state;

    const baseArgs = [text, date.toJSON(), notifactionsEnabled]
    const args = item ?
        [item.id, ...baseArgs] :
        [...baseArgs, currentProject];

    submit(...args);
  }

  render() {
    return(
      <View style={styles.todoForm}>
        <View style={styles.formContainer}>
          <View style={styles.field}>
            <Text style={styles.label}>Text</Text>
            <TextInput style={styles.input}
                       value={this.state.text}
                       autoFocus={true}
                       onChangeText={(text) => this.setState({ text: text })}
                       multiline={true} />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Due Date</Text>
            <TextInputDatePicker
                date={this.state.date}
                minimumDate={this.state.currentDate}
                onDateChange={(date) => this.setState({ date: date })}
                mode="datetime"
              />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Enable Notifactions?</Text>
            <SwitchIOS value={this.state.notifactionsEnabled}
                       onValueChange={(value) => this.setState({ notifactionsEnabled:  value})}/>
          </View>
        </View>

        <SaveButton title="Save Todo"
                    onPress={this.submit.bind(this)} />
      </View>
    )
  }
}

TodoFormComponent.propTypes = {
  item: PropTypes.object,
  currentProject: PropTypes.string,
  actions: PropTypes.shape({
    submit: PropTypes.func.isRequired
  })
};

var styles = StyleSheet.create({
  todoForm: {
    flex: 1,
  },

  formContainer: {
    flex: 1,
    marginTop: 24,
  },

  field: {
    marginBottom: 18
  },

  label: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '400',

    color: 'rgba(255, 255, 255, .8)',
  },

  input: {
    padding: 10,
    height: 200,

    fontSize: 14,
    color: 'rgba(255, 255, 255, .8)',

    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6
  }
});