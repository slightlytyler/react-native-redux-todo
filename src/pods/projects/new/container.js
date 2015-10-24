'use strict'

import { connect } from 'react-redux/native'

import { addProject } from 'pods/projects/actions'
import ProjectFormComponent from 'pods/projects/components/form'

const NewProjectContainer = connect(state => {
  return {
    submitAction: addProject
  };
})(ProjectFormComponent);

export default NewProjectContainer
