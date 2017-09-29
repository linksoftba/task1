import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'linkos-tasks',
  templateUrl: './linkos-tasks.component.html',
  styleUrls: ['./linkos-tasks.component.css']
})
export class LinkosTasks implements OnInit {
today;
tomorow;

  constructor() { }

  ngOnInit() {
    this.today = [
      {
      title: 'Meeting with Lucas',
      time: '12pm-1pm',
      location: 'San Francisco, CA 94105',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fugiat libero odit amet eveniet. Sint commodi atque consequuntur earum odit distinctio minima ea veniam laborum?'
      },
      {
        title: 'Skype Call',
        time: '1pm-2pm',
        location: 'Office',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fugiat libero odit amet eveniet. Sint commodi atque consequuntur earum odit distinctio minima ea veniam laborum?'
      }
    ];
    this.tomorow = [
      {
      title: 'Project UI',
      time: '2pm-3pm',
      location: 'Meeting Room',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fugiat libero odit amet eveniet. Sint commodi atque consequuntur earum odit distinctio minima ea veniam laborum?'
      },
      {
        title: 'Startups',
        time: '4pm-5pm',
        location: 'Palo Alto',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fugiat libero odit amet eveniet. Sint commodi atque consequuntur earum odit distinctio minima ea veniam laborum?'
      }
    ]
    

  }

}
