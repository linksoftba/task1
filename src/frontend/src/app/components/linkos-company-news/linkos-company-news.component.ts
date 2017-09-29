import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'linkos-company-news',
  templateUrl: './linkos-company-news.component.html',
  styleUrls: ['./linkos-company-news.component.css']
})
export class LinkosCompanyNews implements OnInit {
newsList;
  constructor() { }

  ngOnInit() {

    this.newsList = [
      {
        title: 'Sales',
        description: 'Sell faster and smarter with the world’s #1 sales platform.',
        important: true,
        time: new Date('2017-09-28T21:14:00')
        
      },
      {
        title: 'Service',
        description: 'Manage customer support across every channel with the #1 service platform.',
        important: false,
        time: new Date('2017-09-27T16:22:00')
        
      },
      {
        title: 'Marketing',
        description: 'Deliver personalized messages on any channel with the #1 marketing platform.',
        important: false,
        time: new Date('2017-09-25T18:55:00')
        
      }
    ]

  }

  addNews (newstitle: string, newsmessage: string, importantNews: boolean) {
    if (newstitle !== "" || newsmessage !== ""){
      var newtime = new Date();
      
          this.newsList.unshift({
            title: newstitle,
            description: newsmessage,
            important: importantNews,
            time: newtime
          });
        }
    }

}
