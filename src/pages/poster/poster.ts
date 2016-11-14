import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, private navParams: NavParams, platform: Platform) {
    this.platform = platform;
    this.person = navParams.get('person');
    this.posterUrl = `http://162.243.118.247${this.person.poster.url}`;
  }

  ionViewDidLoad() {
    console.log('Hello Poster Page');
  }

  share() {
    this.platform.ready().then(() => {
      if((<any>window).plugins.socialsharing) {  
          (<any>window).plugins.socialsharing.share("Compartilhe o cartaz com seus conhecidos!", null, this.posterUrl, null);
      }
    });
  }
}
