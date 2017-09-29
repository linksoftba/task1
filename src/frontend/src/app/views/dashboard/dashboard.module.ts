import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';

import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from '../../components/linkos-calendar/demo-utils/module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LinkosAboutCompany } from '../../components/linkos-about-company';
import { LinkosAboutUser } from '../../components/linkos-about-user';
import { LinkosActivUsers } from '../../components/linkos-activ-users';
import { LinkosCompanyNews } from '../../components/linkos-company-news';
import { LinkosClock } from '../../components/linkos-clock';
import { LinkosCalendar } from '../../components/linkos-calendar';
import { LinkosTasks } from '../../components/linkos-tasks';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DemoUtilsModule
  ],
  declarations: [ DashboardComponent, 
                  LinkosAboutCompany,
                  LinkosAboutUser,
                  LinkosActivUsers,
                  LinkosCompanyNews,
                  LinkosClock,
                  LinkosCalendar,
                  LinkosTasks ]
})
export class DashboardModule { }
