'use strict'

import { ProjectsIndexContainer } from 'pods/projects/index/container'

export function ProjectsIndexRoute() {
  return {
    name: 'projects.index',
    title: 'Projects',
    component: ProjectsIndexContainer,
  }
}