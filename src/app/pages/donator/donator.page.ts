import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donator',
  templateUrl: './donator.page.html',
  styleUrls: ['./donator.page.scss'],
})
export class DonatorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openOld(){
    this.router.navigate(['profileold']);
  }

}
