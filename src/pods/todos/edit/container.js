'use strict'

import { connect } from 'react-redux/native'
import { bindActionCreators } from 'redux'

import { updateTodo } from 'pods/todos/actions'

import TodoFormComponent from 'pods/todos/components/form'

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submit: updateTodo
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { submit } = dispatchProps;
  const { item, navigator } = ownProps;

  return Object.assign({}, {
    item,
    actions: {
      submit: function() {
        submit(...arguments);
        navigator.pop();
      }
    }
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoFormComponent);
