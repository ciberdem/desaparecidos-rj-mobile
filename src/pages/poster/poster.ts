import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';


// interface GoogleAnalyticsPlugin {
    // startTrackerWithAccountID(accountId: string): void;
// }

// interface Plugins {
    // googleAnalyticsPlugin: GoogleAnalyticsPlugin;
// }


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
  public platform;
  // public window: any;
  // public window: any;

  constructor(public navCtrl: NavController, private navParams: NavParams, platform: Platform) {
  // constructor(public navCtrl: NavController, private navParams: NavParams, platform: Platform) {
    // this.window = window;
    this.platform = platform;
    this.person = navParams.get('person');
    this.posterUrl = `http://162.243.118.247${this.person.poster.url}`;
  }

  ionViewDidLoad() {
    console.log('Hello Poster Page');
  }

  share() {
    // interface Window {
    //   plugins: any;
    // }

    this.platform.ready().then(() => {
      // if(this.window.plugins.socialsharing) {  
      if((<any>window).plugins.socialsharing) {  
          (<any>window).plugins.socialsharing.share("message hehe", null, null, null);
      }
      // console.log();
    });
  }
}
