import { Component, OnInit } from '@angular/core';
import * as firebasse from "nativescript-plugin-firebase"
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: "./login/login.component.html",
  styleUrls: ['./login/login.component.css']
})
export class LoginComponent implements OnInit {
  email :string
  password :string
  constructor(private router: Router) {
    this.email="user1@gmail.com";
    this.password="123456"
   }

  ngOnInit() { }
  login() {
    firebasse.login({
      type: firebasse.LoginType.PASSWORD,
      passwordOptions: {
        email: this.email,
        password: this.password
      }
    }).then(() => this.router.navigateByUrl("chat"),
            () => alert("Login failed")
      )
  }

}
