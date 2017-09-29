import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'linkos-about-company',
  templateUrl: './linkos-about-company.component.html',
  styleUrls: ['./linkos-about-company.component.css']
})
export class LinkosAboutCompany implements OnInit {
name: string;
adress: string;
telephone: string;
  constructor() { }

  ngOnInit() {
    this.name = 'Sales Force',
    this.adress = 'San Francisco, CA 94105',
    this.telephone = '1-800-667-6389'
  }

}
