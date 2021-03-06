import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List } from '../list/list';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  entryComponents: [List]
})
export class Search {
  public name; father; mother; sex; age; height; skin; hair; eyes; physical; tattoo; scar; amputee; disabled;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Search Page');
  }

  // Get paramters passed by form inputs and mount url to call API
  mountParamsUrl() {
    return `?name=${this.name}&father=${this.father}&mother=${this.mother}&sex=${this.sex}&age=${this.age}&height=${this.height}&skin=${this.skin}&hair=${this.hair}&eyes=${this.eyes}&physical=${this.physical}&tattoo=${this.tattoo}&scar=${this.scar}&amputee=${this.amputee}&disabled=${this.disabled}`;
  }

  // Send mounted url to be called in API by next page
  getPeople() {
    console.log(this.mountParamsUrl());
    this.navCtrl.push(List, { paramsUrl: this.mountParamsUrl() });       
  }
}
