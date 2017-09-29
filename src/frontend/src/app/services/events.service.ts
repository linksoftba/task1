import { Injectable } from '@angular/core';
import { Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

//service made to comunicate with backend
@Injectable()
export class EventsService {


    constructor(private http: Http) {    }

    //method that gona make request on backend route that retrives data from database
    requestEvents() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get('http://localhost:3030/event', {headers: headers}).map(res => res.json());
    }
}