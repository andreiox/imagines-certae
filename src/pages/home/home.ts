import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {

  }

  options = {
    mobileBreakpoint: 0,
    defaultItemCols: 5,
    defaultItemRows: 5,
    // pushItems: false,
    // swap: false,
    draggable: {
      delayStart: 300,
      enabled: true,
      // dropOverItems: true,
      // dropOverItemsCallback: this.presentAlert
    },
    resizable: {
      enabled: true,
    }
  }

  dashboard = [
    { cols: 5, rows: 1, y: 0, x: 0 },
    { cols: 3, rows: 1, y: 1, x: 1 },
    { cols: 1, rows: 1, y: 2, x: 1 },
    { cols: 1, rows: 1, y: 2, x: 2 },
    { cols: 1, rows: 1, y: 2, x: 3 },
    { cols: 3, rows: 1, y: 3, x: 1 },
    { cols: 5, rows: 1, y: 4, x: 0 },
  ]

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
    
  }

}
