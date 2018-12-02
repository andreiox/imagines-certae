import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, ModalContentPage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { Screenshot } from '@ionic-native/screenshot';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GridsterModule } from 'angular-gridster2';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalContentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GridsterModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    Screenshot,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
