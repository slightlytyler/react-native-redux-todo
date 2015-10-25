'use strict'

import {
  Component,
  PropTypes,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'

import moment from 'moment'

import globalStyles from 'styles/styles'

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
    return(
      <View style={styles.form}>
        <View style={styles.formContainer}>
          <View style={styles.field}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input}
                       value={this.state.title}
                       autoFocus={true}
                       onChangeText={(text) => this.setState({ title: text })} />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Sub Title</Text>
            <TextInput style={styles.input}
                       value={this.state.subTitle}
                       onChangeText={(text) => this.setState({ subTitle: text })} />
          </View>
        </View>

        <TouchableOpacity style={styles.button}
                          onPress={this.submit.bind(this)}
                          activeOpactiy={.6}>
          <Text style={styles.buttonText}>Save Project</Text>
        </TouchableOpacity>
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

var styles = {
  ...globalStyles,

  form: {
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
    height: 40,

    fontSize: 14,
    color: 'rgba(255, 255, 255, .8)',

    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6
  }
}