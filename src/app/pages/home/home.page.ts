import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController } from '@ionic/angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
const { Geolocation } = Plugins;

const { Modals } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  lat: any;
  long: any;

  adres = '';

  constructor(private nativeGeocoder: NativeGeocoder, private callNumber: CallNumber, public alertController: AlertController, private paypal: PayPal) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.getCurrentPosition();
    this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options)
      .then((result: NativeGeocoderResult[]) => { this.adres = JSON.stringify(result[0]); console.log(JSON.stringify(result[0])) })
      .catch((error: any) => console.log(error));
  }

  ngOnInit() {
    this.watchPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.long = coordinates.coords.latitude;
    console.log('Current', coordinates);
    console.log(coordinates.coords.latitude);

  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {

      console.log('aaaaaaaa', position);
    })
  }

  async alarm() {
    this.presentAlertConfirm();
  }

  callPolice() {
    this.callNumber.callNumber("129", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  callFire() {
    this.callNumber.callNumber("127", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  callDoc() {
    this.callNumber.callNumber("00355690000000", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'U Njoftuan!',
      message: 'Njoftuam Familjarët, Mjekun dhe Vullentarët, Ata do të jenë së shpejti pranë jush! ',
      buttons: [
        {
          text: 'Në rregull',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
