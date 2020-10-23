import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert.service';
import { AuthenticationService } from './auth.service';
import { LangService } from './lang.service';
import { ProjectDataService } from './project-data.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [AlertService, AuthenticationService, LangService, ProjectDataService, UserService],
  imports: [
    CommonModule
  ],
  exports: [
    AlertService, AuthenticationService, LangService, ProjectDataService, UserService
  ]
})
export class ServicesModule { }
