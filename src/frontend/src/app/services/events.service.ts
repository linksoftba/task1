import { Injectable } from '@angular/core';
import { Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class EventsService {


    constructor(private http: Http) {    }


    requestEvents() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get('http://localhost:3030/event', {headers: headers}).map(res => res.json());
    }
}