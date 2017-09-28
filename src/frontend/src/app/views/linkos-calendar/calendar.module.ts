import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular-calendar'

import { LinkosCalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module'

@NgModule({
  imports: [
    HttpModule,
    ChartsModule,
    CalendarRoutingModule,
    CalendarModule.forRoot()
  ],
  declarations: [ LinkosCalendarComponent ]
})
export class LinkosCalendarModule { }
