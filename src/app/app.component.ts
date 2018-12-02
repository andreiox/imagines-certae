import { Component, ViewChild } from '@angular/core'
import { Nav, Platform, MenuController, AlertController } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { Screenshot } from '@ionic-native/screenshot'
import { SplashScreen } from '@ionic-native/splash-screen'

import { HomePage } from '../pages/home/home'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav

  rootPage: any = HomePage

  pages: Array<{ title: string, component: any }>

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public screenshot: Screenshot,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public splashScreen: SplashScreen,
  ) {

    this.initializeApp()

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Export', component: null }
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    })
  }

  openPage(page) {
    if (page.component) {
      this.nav.setRoot(page.component)
    } else {

      this.menuCtrl.close().then((value) => {
        setTimeout(() => {
          const filename = 'imagines-certae-' + new Date().getTime()
          this.screenshot.save('jpg', 100, filename).then((value) => {
            this.presentAlertExportSuccess()
          }, (error) => {
            this.presentAlertExportFailed()
          })
        }, 1000)
      })

    }
  }

  presentAlertExportSuccess() {
    let alert = this.alertCtrl.create({
      title: 'Exportação concluída',
      message: 'Imagem salva na sua galeria',
      buttons: ['OK']
    })
    alert.present()
  }

  presentAlertExportFailed() {
    let alert = this.alertCtrl.create({
      title: 'Exportação falhou',
      message: 'A exportação falhou. Tente novamente mais tarde.',
      buttons: ['OK']
    })
    alert.present()
  }
}
