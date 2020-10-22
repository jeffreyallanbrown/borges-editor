import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppState } from '../reducers/projects.reducers';
import { Store } from '@ngrx/store';
import { ProjectDataService } from '../services/project-data.service';
import { ProjectActionTypes, LoadProjects, ProjectsError, LoadProjectsSuccess, SelectProject, SelectProjectSuccess } from '../actions/projects.actions';
import { of } from 'rxjs';

@Injectable()
export class ProjectEffects {

  @Effect()
  loadProjects$ = this.actions$
    .pipe(
      ofType<LoadProjects>(ProjectActionTypes.LoadProjects),
      mergeMap((action) => this.projectDataService.LoadProjects()
      .pipe(
        map(projectData => {
          return (new LoadProjectsSuccess({ projectData }));
        }),
        catchError((errorMessage) => of(new ProjectsError({error: errorMessage})))
      ))
  );

  @Effect()
  selectProject$ = this.actions$
  .pipe(
    ofType<SelectProject>(ProjectActionTypes.SelectProject),
    map((selectedProject) => {
      return (new SelectProjectSuccess({ selectedProject }))
    }),
    catchError((errorMessage) => of(new ProjectsError({error: errorMessage})))
  )



  constructor(private projectDataService: ProjectDataService , private actions$: Actions, private store: Store<AppState> ) {}

}
