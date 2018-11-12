import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options = {
    itemChangeCallback: HomePage.itemChange,
    itemResizeCallback: HomePage.itemResize,
    mobileBreakpoint: 0,
    defaultItemCols: 3,
    defaultItemRows: 3,
  }

  dashboard = [
    { cols: 3, rows: 1, y: 0, x: 0, dragEnabled: true, },
    { cols: 3, rows: 1, y: 1, x: 0, dragEnabled: true, },
    { cols: 3, rows: 1, y: 2, x: 0, dragEnabled: true, },
  ]

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  changedOptions() {
    console.log('options changed')
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    console.log('addItem')
  }

  constructor(public navCtrl: NavController) {

  }

}
