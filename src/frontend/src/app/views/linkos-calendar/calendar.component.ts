import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { CalendarEvent,   
  CalendarDateFormatter,
  DAYS_OF_WEEK
} from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';

@Component({
  selector: 'calendar',
  providers: [ EventsService ],
  templateUrl: './calendar.component.html',
  styleUrls: [ './calendar.component.css' ]
})
export class LinkosCalendarComponent implements OnInit {
  view = 'month';
  viewDate = new Date();
  events: any;
  items: Array<CalendarEvent<{ time: any }>> = [];
  locale: string = 'bs';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  activeDayIsOpen: boolean = false;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.requestEvents().subscribe(res => {
      for(let i=0; i<res.data.length; i++) {
          this.items.push(
          {
            title: res.data[i].name,
            start: new Date(res.data[i].date),
            color: {primary: '#e3bc08', secondary: '#FDF1BA'},
            meta: {
              time: res.data[i].date
            }
        });
        this.events = this.items;
      }
    });
  }

 
  dayClicked({
    date,
    events
  }: {
    date: Date;
    events: Array<CalendarEvent<{ time: any }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }


  getEvents() {
    this.eventsService.requestEvents().subscribe(res => {
      this.events = res.data;
      alert(JSON.stringify(this.events));
    });
  }
}
