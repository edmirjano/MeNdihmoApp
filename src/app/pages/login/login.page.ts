import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  pass: any;
  constructor(public auth: AngularFireAuth, public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
  async login() {
    let str = this.email.substring(0, this.email.indexOf('@'));
    console.log(str);
    // const a = await this.auth.auth.createUserWithEmailAndPassword('test@gmail.com', 'testest');
    // console.log(a);
    await this.auth.auth.signInWithEmailAndPassword(this.email, this.pass).then(data => {
      if (str == 'donator') {
        this.router.navigate(['donator']);
        Storage.set({
          key: 'signin',
          value: 'donator'
        });
      } else if (str == 'vullnetar') {
        this.router.navigate(['vullnetar']);
        Storage.set({
          key: 'signin',
          value: 'vullnetar'
        });
      } else {
        this.router.navigate(['home']);
        Storage.set({
          key: 'signin',
          value: 'moshuar'
        });
      }
    }).catch(err => {
      this.presentAlertConfirm('Email ose fjalkalimi i gabuar');
    });

  }
  async presentAlertConfirm(msg) {
    const alert = await this.alertController.create({
      header: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
