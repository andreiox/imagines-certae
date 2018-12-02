import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

import { GridsterItem } from 'angular-gridster2';


import { ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
declare var cordova: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options
  customOptions
  dashboard: GridsterItem[]

  constructor(private modalCtrl: ModalController) {

    this.customOptions = {
      displayRemoveButton: false,
      displayEditButton: false,
    }

    this.options = {
      mobileBreakpoint: 0,
      defaultItemCols: 5,
      defaultItemRows: 5,
      minCols: 3,
      minRows: 3,
      draggable: {
        delayStart: 300,
        enabled: true,
      },
      resizable: {
        enabled: true,
      }
    }

    this.dashboard = [
      { cols: 5, rows: 1, y: 0, x: 0, background: '#FFFFFF' },
      { cols: 3, rows: 1, y: 1, x: 1, background: '#FFFFFF' },
      { cols: 1, rows: 1, y: 2, x: 1, background: '#FFFFFF' },
      { cols: 1, rows: 1, y: 2, x: 2, background: '#FFFFFF' },
      { cols: 1, rows: 1, y: 2, x: 3, background: '#FFFFFF' },
      { cols: 3, rows: 1, y: 3, x: 1, background: '#FFFFFF' },
      { cols: 5, rows: 1, y: 4, x: 0, background: '#FFFFFF' },
    ]
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1, background: '#FFFFFF' });
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  openModalEdit($event, item) {
    let modal = this.modalCtrl.create(ModalContentPage, { item: item });
    modal.present();
  }

  toggleRemoveButton() {
    this.customOptions.displayRemoveButton = !this.customOptions.displayRemoveButton
  }

  toggleEditButton() {
    this.customOptions.displayEditButton = !this.customOptions.displayEditButton
  }

}

@Component({
  selector: 'page-home',
  templateUrl: 'modal-edit.html'
})
export class ModalContentPage {
  item: GridsterItem
  background: string

  constructor(public params: NavParams, public viewCtrl: ViewController) {
    this.item = this.params.get('item');
    this.background = this.item.background
  }

  setColor(hexColor: string) {
    this.background = hexColor
  }

  applyBackground() {
    this.item.background = this.background
    this.dismiss()
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}