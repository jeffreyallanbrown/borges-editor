import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Project } from 'src/app/interfaces/project';
import { AppState } from 'src/app/reducers/projects.reducers';
import { LoadProjects, SelectProject } from 'src/app/actions/projects.actions';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})

export class ProjectsListItemComponent implements OnInit {
  projects: Observable<Project[]>;
  loadedProjects: Project[];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadProjects({}));
  }

  ngOnInit() {
    this.store.select('projects').subscribe((projects) => {
      this.projects = projects.projectData;
      this.useProjects(this.projects);
    });
  }

  useProjects(projects:any){
    return this.loadedProjects = projects;
  }

  onSelect(project){
    this.store.dispatch(new SelectProject({ selectedProject: project }));
  }

}
