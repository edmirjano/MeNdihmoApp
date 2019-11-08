import { Component } from '@angular/core';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { Health, HealthStoreOptions, HealthQueryOptions } from '@ionic-native/health/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ab: any;
  hlth: any;
  nr = 0;
  constructor(private pedometer: Pedometer, private health: Health) {
  }
  ngOnInit() {
    this.pedometer.isDistanceAvailable()
      .then((available: Boolean) => this.ab = available)
      .catch((err: any) => { console.log(err), this.ab = err });
    ///health
    this.health.isAvailable()
      .then((available: boolean) => {
        console.log(available);
        this.health.requestAuthorization([
          'distance'
        ])
          .then(res => {
            let opt: HealthStoreOptions={ startDate: new Date("2019-10-16"), endDate: new Date("2019-11-06"), dataType: 'steps', value: 'count' , sourceName: '', sourceBundleId: 'com.edi.health'};
            this.health.store(opt);
            console.log(res), this.hlth = res.options.readTypes.HKQuantityTypeIdentifierDistanceWalkingRunning, this.nr = 1
          })
          .catch(e => { console.log(e), this.hlth = e, this.nr = 2 });
      })
      .catch(e => { console.log(e), this.hlth = e, this.nr = 3 });
  }
}
