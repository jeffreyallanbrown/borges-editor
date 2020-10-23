import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ProjectDashboardComponent } from './projects/project-dashboard/project-dashboard.component';
import { ProjectStudioComponent } from './projects/project-studio/project-studio.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatSliderModule } from '@angular/material/slider';
import { ReadingListsComponent } from './reading-lists/reading-lists.component';


@NgModule({
  declarations: [AppComponent, ProjectDashboardComponent, ProjectStudioComponent, ReadingListsComponent],
  imports: [
    AppRoutingModule,
    LayoutContainersModule,
    ComponentsModule,
    MatSliderModule
  ],
})
export class AppModule { }
