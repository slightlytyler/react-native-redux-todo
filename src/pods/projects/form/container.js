'use strict'

import { connect } from 'react-redux/native'

import { addProject, updateProject } from '../actions'
import ProjectFormComponent from './component'

const ProjectFormContainer = connect(state => {
  return { addProject, updateProject };
})(ProjectFormComponent);

export default ProjectFormContainer
