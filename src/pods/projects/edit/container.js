'use strict'

import { connect } from 'react-redux/native'
import { bindActionCreators } from 'redux';

import { updateProject } from 'pods/projects/actions'
import ProjectFormComponent from 'pods/projects/components/form'

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submit: updateProject
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { item, navigator } = ownProps;
  const { submit } = dispatchProps;

  return {
    item,
    actions: {
      submit: function() {
        submit(...arguments);
        navigator.pop()
      }
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ProjectFormComponent);
