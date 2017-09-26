import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpModule } from '@angular/http';

import { DashboardComponent } from './dashboard.component';
import { AboutCompanyComponent } from '../../components/linkos-about-company/about-company.component'
import { AboutUserComponent } from '../../components/linkos-about-user/about-user.component';
import { ActiveUsersChatComponent } from '../../components/linkos-active-users-chat/active-users-chat.component';
import { LinkosCalendarComponent } from '../../components/linkos-calendar/calendar.component';
import { ClockComponent } from '../../components/linkos-clock/clock.component';
import { CompanyNewsComponent } from '../../components/linkos-company-news/company-news.component';
import { TaskComponent } from '../../components/linkos-task/task.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { EventsService } from '../../services/events.service'

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    HttpModule
  ],
  declarations: [ 
    DashboardComponent,
    AboutCompanyComponent,
    AboutUserComponent, 
    ActiveUsersChatComponent,
    CompanyNewsComponent,
    ClockComponent,
    LinkosCalendarComponent,
    TaskComponent
  ]
})
export class DashboardModule { }
