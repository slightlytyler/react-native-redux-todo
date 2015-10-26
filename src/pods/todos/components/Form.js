'use strict'

import {
  Component,
  PropTypes,
  View,
  Text,
  TextInput,
  SwitchIOS,
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'
import moment from 'moment'

import TextInputDatePicker from 'components/TextInputDatePicker'
import SaveButton from 'components/SaveButton'

import styles from 'styles/Form'

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
    const {
      text,
      date,
      currentDate,
      notifactionsEnabled
    } = this.state;

    return(
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Text</Text>
            <TextInput style={styles.multiLineInput}
                       value={text}
                       autoFocus={true}
                       onChangeText={(text) => this.setState({ text: text })}
                       multiline={true} />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Due Date</Text>
            <TextInputDatePicker
                date={date}
                minimumDate={currentDate}
                onDateChange={date => this.setState({ date: date })}
                mode="datetime"
              />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Enable Notifactions?</Text>
            <SwitchIOS value={notifactionsEnabled}
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