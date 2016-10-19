import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Search } from '../search/search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [Search]
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  // Go to search page form
  goToSearch() {
    this.navCtrl.push(Search);
  }
}
