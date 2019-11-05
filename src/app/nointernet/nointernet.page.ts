import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Plugins, AppState } from '@capacitor/core';

const { App } = Plugins;
@Component({
  selector: 'app-nointernet',
  templateUrl: './nointernet.page.html',
  styleUrls: ['./nointernet.page.scss'],
})
export class NointernetPage implements OnInit {
  isAndroid=true;
  constructor(private plt: Platform, private router: Router, public alertController: AlertController) {
    if(this.plt.is('ios')){
      this.isAndroid=false;
    }
   }

  ngOnInit() {
  }

  refresh(){
    if (!navigator.onLine) {
      this.presentAlert('No connection!');
      } else {
    this.router.navigate(['']);
      }
  }
  close(){
    App.exitApp();
  }
  async presentAlert(title: any) {
    const alert = await this.alertController.create({
      header: title,
      buttons: ['OK']
    });

    await alert.present();
  }

}
