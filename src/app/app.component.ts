import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
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
      title: 'Home',
      icon: 'home',
      active: true
    },
    {
      title: 'My Wallet',
      icon: 'wallet'
    },
    {
      title: 'History',
      icon: 'time'
    },
    {
      title: 'Notif',
      icon: 'notifications'
    },
    {
      title: 'Invite',
      icon: 'gift'
    },
    {
      title: 'Settings',
      icon: 'settings'
    },
    {
      title: 'Logout',
      icon: 'log-out'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
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
}
