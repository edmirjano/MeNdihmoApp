import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilevolunteer',
  templateUrl: './profilevolunteer.page.html',
  styleUrls: ['./profilevolunteer.page.scss'],
})
export class ProfilevolunteerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openOld() {
    this.router.navigate(['profileold']);
  }
}
