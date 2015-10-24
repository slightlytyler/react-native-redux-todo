'use strict'

import { connect } from 'react-redux/native'

import { updateProject } from 'pods/projects/actions'
import ProjectFormComponent from 'pods/projects/components/form'

const EditProjectContainer = connect(state => {
  return {
    submitAction: updateProject
  };
})(ProjectFormComponent);

export default EditProjectContainer
