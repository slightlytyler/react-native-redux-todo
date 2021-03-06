'use strict'

import ProjectsIndexContainer from 'pods/projects/index/container'

export function ProjectsIndexRoute() {
  return {
    name: 'projects.index',
    title: 'Projects',
    component: ProjectsIndexContainer,
  }
}

import NewProjectContainer from 'pods/projects/new/container'

export function NewProjectRoute() {
  return {
    name: 'projects.new',
    title: 'New Project',
    subTitle: 'Starting fresh',
    component: NewProjectContainer
  }
}

import EditProjectContainer from 'pods/projects/edit/container'

export function EditProjectRoute(options) {
  const { subTitle, passProps } = options;

  return {
    name: 'projects.edit',
    title: 'Edit Project',
    subTitle: subTitle,
    component: EditProjectContainer,
    passProps: { ...passProps }
  }
}