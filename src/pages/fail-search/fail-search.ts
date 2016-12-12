import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FailSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fail-search',
  templateUrl: 'fail-search.html'
})
export class FailSearch {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FailSearch Page');
  }

  goBack() {
    this.navCtrl.pop();
  }
}
