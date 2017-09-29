import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'linkos-activ-users',
  templateUrl: './linkos-activ-users.component.html',
  styleUrls: ['./linkos-activ-users.component.css'],
})
export class LinkosActivUsers implements OnInit {
 
private ApiURL = 'http://localhost:3030/user';
data: any = {};
  constructor(private http:Http) { }

  ngOnInit() {
    this.getData()
    this.getImages()
  }

  getData() {
    return this.http.get(this.ApiURL).map(res => res.json())
  }

  getImages() {
    this.getData()
    .subscribe(data => {
      this.data = data
    })
  }
}
