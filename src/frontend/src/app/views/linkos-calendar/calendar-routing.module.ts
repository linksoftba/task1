import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkosCalendarComponent } from './calendar.component';

const routes: Routes = [
  {
    path: '',
    component: LinkosCalendarComponent,
    data: {
      title: 'Calendar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}
