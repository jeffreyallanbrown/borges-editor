import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Project } from 'src/app/interfaces/project';
import { AppState } from 'src/app/reducers/projects.reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-studio',
  templateUrl: './project-studio.component.html',
  styleUrls: ['./project-studio.component.scss']
})
export class ProjectStudioComponent implements OnInit {
  projects: Observable<Project[]>;
  selectedProject: any;
  public project:Project;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.select('projects').subscribe((projects) => {
      this.projects = projects.selectedProject;
      this.useSelectedProject(this.projects);
    });
  }

  useSelectedProject(projects:any){
    return this.project = projects.payload.selectedProject;
  }

}
