import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CalendarModule } from 'angular-calendar';

import { InstructionsComponent } from './instructions.component';
import { InstructionsRoutingModule } from './instructions-routing.module';

@NgModule({
  imports: [
    InstructionsRoutingModule,
    ChartsModule
  ],
  declarations: [ InstructionsComponent ]
})
export class InstructionsModule { }
