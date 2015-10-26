'use strict'

import {
  Component,
  PropTypes,
  View,
  Text,
  TextInput,
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'
import moment from 'moment'

import SaveButton from 'components/SaveButton'

import styles from 'styles/Form'

export default class ProjectFormComponent extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props, context) {
    super(props, context);

    const { item } = this.props;

    this.state = {
      title: item ? item.title : '',
      subTitle: item ? item.subTitle : '',
    };
  }

  submit() {
    const { item, actions } = this.props;
    const { submit } = actions;
    const { title, subTitle } = this.state;

    const baseArgs = [title, subTitle]
    const args = item ? [item.id, ...baseArgs] : baseArgs;

    submit(...args)
  }

  render() {
    const { title, subTitle } = this.state;

    return(
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.singleLineInput}
                       value={title}
                       autoFocus={true}
                       onChangeText={(text) => this.setState({ title: text })} />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Sub Title</Text>
            <TextInput style={styles.singleLineInput}
                       value={subTitle}
                       onChangeText={(text) => this.setState({ subTitle: text })} />
          </View>
        </View>

        <SaveButton title="Save Project"
                    onPress={this.submit.bind(this)} />
      </View>
    )
  }
}

ProjectFormComponent.propTypes = {
  item: PropTypes.object,
  actions: PropTypes.shape({
    submit: PropTypes.func.isRequired
  }),
};