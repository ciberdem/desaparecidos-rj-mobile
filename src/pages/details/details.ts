import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details {
  public person;
  public photoUrl;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.person = navParams.get('person');
    this.photoUrl = `http://162.243.118.247${this.person.photo.url}`;
  }

  ionViewDidLoad() {
    console.log('Hello Details Page');
  }

  generatePoster() {
    console.log('generating poster');
  }
}
