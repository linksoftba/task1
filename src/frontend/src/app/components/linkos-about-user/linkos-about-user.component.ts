import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'linkos-about-user',
  templateUrl: './linkos-about-user.component.html',
  styleUrls: ['./linkos-about-user.component.css']
})
export class LinkosAboutUser implements OnInit {

  name: string;
  function: string;
  imgPath: string;
  email: string;
  telephone: string;
  skype: string
  constructor() { }

  ngOnInit() {

    this.name = 'Marc Benioff';
    this.function = 'CEO & founder';
    this.imgPath = 'https://cdn.geekwire.com/wp-content/uploads/2016/05/marcbenioff.jpg';
    this.telephone = '1-800-667-6389';
    this.email = 'marc.benioff@salesforce.com'
    this.skype = 'm.benioff'


  }

  changeDetails(newname:string, profileimg:string, workplace:string, newemail:string, newtelephone:string, newskype:string) {
    this.name = newname;
    this.function = workplace;
    this.imgPath = profileimg;
    this.email = newemail;
    this.telephone = newtelephone;
    this.skype = newskype; 
  }

}
