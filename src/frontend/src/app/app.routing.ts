import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkosCalendarComponent } from './views/linkos-calendar/calendar.component';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayout,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'instructions',
        loadChildren: './views/instructions/instructions.module#InstructionsModule'
      },
      {
        path: 'calendar',
        component: LinkosCalendarComponent,
        loadChildren: './views/linkos-calendar/calendar.module#LinkosCalendarModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
