import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'linkos-clock',
  templateUrl: './linkos-clock.component.html',
  styleUrls: ['./linkos-clock.component.css']
})
export class LinkosClock implements OnInit {
  time = new Date();
  constructor() { }

  ngOnInit() {
    this.updateClock();
  }
  
  updateClock() {
    this.time = new Date();
    setTimeout(() => this.updateClock(), 500 );
}

}
