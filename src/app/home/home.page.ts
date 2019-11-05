import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: InAppBrowserOptions = {
    location: 'no',
    clearcache: 'yes',
    toolbar: 'no',
    hideurlbar: 'yes',
    usewkwebview: 'yes',
    hidenavigationbuttons: 'yes',
    hidespinner: 'yes',
    footer: 'no',
    zoom: 'no'

  };
  constructor(private iab: InAppBrowser, private plt: Platform, private router: Router) {
    if (this.plt.is('ios')) {
      const browser = this.iab.create('https://primefinnews.com/', '_blank');
      browser.show();
      browser.on('loaderror').subscribe(event => {
        browser.hide();
        this.router.navigate(['nointernet']);
      });
    } else {
      const browser = this.iab.create('https://primefinnews.com/', '_self', this.options);
      browser.show();
      browser.on('loaderror').subscribe(event => {
        browser.hide();
        this.router.navigate(['nointernet']);
      });
    }

  }
  ngOnInit() {
  }
}
