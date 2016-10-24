import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WebApiService } from '../../providers/web-api-service';
import { Details } from '../details/details'; 

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [WebApiService]
})
export class List {
  public paramsUrl;
  public people;

  constructor(public navCtrl: NavController, private navParams: NavParams, private webapi: WebApiService) {
    this.paramsUrl = navParams.get('paramsUrl');

    // Call API to get people searched
    this.webapi.searchPeople(this.paramsUrl).subscribe(
      data => this.people = data.json(),
      err => console.error(JSON.stringify(err)),
      () => console.log('success called api')
    );
  }

  ionViewDidLoad() {
    console.log('Hello List Page');
  }

  getImage(person) {
    return `http://162.243.118.247${person.photo.url}`;
  }

  goToDetails(person) {
    this.navCtrl.push(Details, { person: person });
  }
}
