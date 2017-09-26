import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'calendar',
  providers: [ EventsService ],
  templateUrl: './calendar.component.html',
  styleUrls: [ './calendar.component.css' ]
})
export class LinkosCalendarComponent implements OnInit {
  events;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  getEvents() {
    this.eventsService.requestEvents().subscribe(res => {
      this.events = res.data;
      alert(JSON.stringify(this.events));
      
    });
  }

}
