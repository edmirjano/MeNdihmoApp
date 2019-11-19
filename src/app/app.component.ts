import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public sidemenuLayout1 = [
    {
      title: 'Kreu',
      icon: 'home',
      active: true,
      router: ""
    },
    {
      title: 'Donator',
      icon: 'person',
      router: "donator"
    },
    {
      title: 'Vullnetar',
      icon: 'people',
      router: "volunteer"
    },
    {
      title: 'Dhuro',
      icon: 'gift',
      router: "donator"
    },
    {
      title: 'Kontakt',
      icon: 'paper-plane',
      router: "donator"
    },
    {
      title: 'Opsione',
      icon: 'settings',
      router: "donator"
    },
    {
      title: 'Dilni',
      icon: 'log-out',
      router: "login"
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private mc: MenuController
  ) {
    this.initializeApp();
    window.addEventListener('offline', () => {
      this.router.navigate(['nointernet']);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(i){
    this.router.navigate([i.router]);
    this.mc.close();
  }
}
