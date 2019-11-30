import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: any;
  password: any;
  confirm: any;
  roli:any;
  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  register(){
    this.auth.auth.createUserWithEmailAndPassword(this.email, this.password).then(data=>{
      if(data){
        this.router.navigate(['home']);
      }
    })
  }
}
