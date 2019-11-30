import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: 'app-profileold',
  templateUrl: './profileold.page.html',
  styleUrls: ['./profileold.page.scss'],
})
export class ProfileoldPage implements OnInit {

  punaSelected = true;
  vleresimeSelected = false;
  kompaniaSelected = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  segmentButtonClicked(i) {
    if (i == 1) {
      this.punaSelected = true;
      this.vleresimeSelected = false;
      this.kompaniaSelected = false;
    } else if (i == 2) {
      this.kompaniaSelected = true;
      this.punaSelected = false;
      this.vleresimeSelected = false;
    } else {
      this.kompaniaSelected = false;
      this.punaSelected = false;
      this.vleresimeSelected = true;
    }
  }
  openVol() {
    this.router.navigate(['profilevolunteer']);
  }
  Dhuro(e) {
    this.router.navigate(['donate']);
  }
  async share() {
    let shareRet = await Share.share({
      title: 'Dikush ka nevoje per ju!',
      text: 'John Doe, pensionist',
      dialogTitle: 'Dhuroni per John Doe'
    });
  }
}
