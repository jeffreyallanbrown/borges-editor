import { LoadProjects, ProjectActionTypes, ActionsUnion } from "../actions/projects.actions";
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { Project } from '../interfaces/project';

export interface ProjectState {
  projectData: any;
  selectedProject: any;
  error: string;
}

const InitialProjectState: ProjectState = {
  projectData: null,
  selectedProject: null,
  error: null
};

export interface AppState {
  projects: ProjectState
}


export function projectReducer(state: ProjectState = InitialProjectState, action: ActionsUnion): ProjectState {
  switch (action.type) {
    case ProjectActionTypes.LoadProjects:
      return {
        projectData: state.projectData,
        selectedProject: state.selectedProject,
        error: state.error
      }

    case ProjectActionTypes.LoadProjectsSuccess:
      return {
        projectData: action.payload.projectData,
        selectedProject: state.selectedProject,
        error: state.error
      }

    case ProjectActionTypes.SelectProject:
      return {
        projectData: state.projectData,
        selectedProject: state.selectedProject,
        error: state.error
      }

    case ProjectActionTypes.SelectProjectSuccess:
      return {
        projectData: state.projectData,
        selectedProject: action.payload.selectedProject,
        error: state.error
      }

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  projects: projectReducer
}


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
