import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListItemComponent } from './project-components/projects-list-item/projects-list-item.component';
import { ProjectStructureSidebarComponent } from './project-components/project-structure-sidebar/project-structure-sidebar.component';
import { ViewRoutingModule } from 'src/app/views/views.routing';
import { TextEditorComponent } from './editor-components/text-editor.component';
import { QuillModule } from 'ngx-quill';
import { ProjectFilesComponent } from './project-components/project-files/project-files.component';
import { AlertComponent } from './alerts/alerts.component';


@NgModule({
  declarations: [ProjectsListItemComponent, ProjectStructureSidebarComponent, TextEditorComponent, ProjectFilesComponent, AlertComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatTreeModule,
    ViewRoutingModule,
    QuillModule.forRoot()
  ],
  exports: [
    ProjectsListItemComponent,
    ProjectStructureSidebarComponent,
    TextEditorComponent,
    ProjectFilesComponent,
    AlertComponent
  ]
})
export class ComponentsModule { }
