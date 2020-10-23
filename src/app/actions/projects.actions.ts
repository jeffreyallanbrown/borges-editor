import { Action } from '@ngrx/store';

export enum ProjectActionTypes {
  LoadProjects = '[Project Dashboard] Load Projects',
  LoadProjectsSuccess = '[Project Dashboard] Load Projects Success',
  ProjectsError = '[Project Dashboard] Projects Error',
  SelectProject = '[Project Dashboard] Select Project',
  SelectProjectSuccess = '[Project Dashboard] Select Project Success'
}

export class LoadProjects implements Action {
  readonly type = ProjectActionTypes.LoadProjects;
  constructor({ }) {
  }
}

export class LoadProjectsSuccess implements Action {
  readonly type = ProjectActionTypes.LoadProjectsSuccess;
  constructor(readonly payload: { projectData: any }) {
  }
}

export class ProjectsError implements Action {
  readonly type = ProjectActionTypes.ProjectsError;
  constructor(readonly payload: { error: string }) {
  }
}

////
////

export class SelectProject implements Action {
  readonly type = ProjectActionTypes.SelectProject;
  constructor(readonly payload: { selectedProject: any }) {
  }
}

export class SelectProjectSuccess implements Action {
  readonly type = ProjectActionTypes.SelectProjectSuccess;
  constructor(readonly payload: { selectedProject: any }) {
  }
}

export type ActionsUnion = LoadProjects | LoadProjectsSuccess | ProjectsError | SelectProject | SelectProjectSuccess;
