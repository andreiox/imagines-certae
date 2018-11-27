import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  customOptions = {}

  constructor(private navCtrl: NavController) {
    this.customOptions = {
      displayRemoveButton: false,
    }
  }

  options = {
    mobileBreakpoint: 0,
    defaultItemCols: 5,
    defaultItemRows: 5,
    draggable: {
      delayStart: 300,
      enabled: true,
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

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }

  toggleRemoveButton() {
    this.customOptions['displayRemoveButton'] = !this.customOptions['displayRemoveButton']
  }

}
