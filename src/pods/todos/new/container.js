'use strict'

import { connect } from 'react-redux/native'
import { bindActionCreators } from 'redux'

import { addTodo } from 'pods/todos/actions'

import TodoFormComponent from 'pods/todos/components/form'

function mapStateToProps(state) {
  return {
    currentProject: state.projects.condition.currentProject
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submit: addTodo
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { submit } = dispatchProps;
  const { navigator } = ownProps;

  return Object.assign({}, stateProps, {
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

