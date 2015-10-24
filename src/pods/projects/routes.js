'use strict'

import ProjectsIndexContainer from 'pods/projects/index/container'

export function ProjectsIndexRoute() {
  return {
    name: 'projects.index',
    title: 'Projects',
    component: ProjectsIndexContainer,
  }
}

import ProjectFormContainer from 'pods/projects/form/container'

export function NewProjectRoute() {
  return {
    name: 'projects.new',
    title: 'New Project',
    subTitle: 'Starting fresh',
    component: ProjectFormContainer
  }
}

export function EditProjectRoute(rowData, rowID) {
  return {
    name: 'projects.edit',
    title: 'Edit Project',
    subTitle:  rowData.title,
    component: ProjectFormContainer,
    passProps: { item: rowData, rowID: rowID }
  }
}