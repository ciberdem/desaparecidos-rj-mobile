import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WebApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WebApiService {

  constructor(public http: Http) {
    console.log('Hello WebApiService Provider');
  }

  searchPeople(paramsUrl) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json, */*');

    return this.http.get(`http://162.243.118.247/pesquisa${paramsUrl}`, { headers: headers });
  }
}
