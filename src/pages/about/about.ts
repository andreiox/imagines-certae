import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private viewCtrl: ViewController) { }

}
