import { NgModule } from '@angular/core';
import { ViewRoutingModule } from './views.routing';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ErrorComponent } from 'src/app/views/error/error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    ViewRoutingModule,
    RouterModule,
    ScrollToModule.forRoot(),

  ],
  exports: [ErrorComponent],
  providers: [],
})
export class ViewsModule {}
