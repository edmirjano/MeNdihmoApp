import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.page.html',
  styleUrls: ['./volunteer.page.scss'],
})
export class VolunteerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openOld() {
    this.router.navigate(['profilevolunteer']);
  }
}
