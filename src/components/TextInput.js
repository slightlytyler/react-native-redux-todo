'use strict'

// Use this until TextInput.state PR is merged

import { Component } from 'react-native'
import { TextInput as BaseTextInput } from 'react-native'

import shouldPureComponentUpdate from 'react-pure-render/function'

export default class TextInput extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { props, refs } = this;
    const { refName } = props;

    console.log(refs);
    return (
      <BaseTextInput {...props}
                     ref='input'
                     onFocus={() => this.refs.input.focus()} />
    );
  }
}