import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ProjectDashboardComponent } from './projects/project-dashboard/project-dashboard.component';
import { ProjectStudioComponent } from './projects/project-studio/project-studio.component';
import { ReadingListsComponent } from './reading-lists/reading-lists.component';

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'project-dashboard' },
            { path: 'project-dashboard', component: ProjectDashboardComponent },
            { path: 'project-studio', component: ProjectStudioComponent },
            { path: 'reading-lists', component: ReadingListsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
