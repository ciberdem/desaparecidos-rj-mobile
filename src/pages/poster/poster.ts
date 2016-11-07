import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Poster page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-poster',
  templateUrl: 'poster.html'
})
export class Poster {
  public person;
  public posterUrl;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.person = navParams.get('person');
    this.posterUrl = `http://162.243.118.247${this.person.poster.url}`;
  }

  ionViewDidLoad() {
    console.log('Hello Poster Page');
  }

}
