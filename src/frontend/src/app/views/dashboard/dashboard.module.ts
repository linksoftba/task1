import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AboutcompanyComponent } from '../../components/linkos-about-company/aboutcompany.component';
import { AboutuserComponent } from '../../components/linkos-about-user/aboutuser.component';
import { ActiveusersComponent } from '../../components/linkos-active-users/activeusers.component';
import { CompanynewsComponent } from '../../components/linkos-company-news/companynews.component';
import { ClockComponent } from '../../components/linkos-clock/clock.component';
import { CalendarComponent } from '../../components/linkos-calendar/calendar.component';
import { TaskComponent } from '../../components/linkos-task/task.component';


@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [ DashboardComponent,
  AboutcompanyComponent,
  AboutuserComponent,
  ActiveusersComponent,
  CompanynewsComponent,
  ClockComponent,
  CalendarComponent,
  TaskComponent]
})
export class DashboardModule { }
