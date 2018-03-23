import { Component, OnInit } from '@angular/core';
import * as firebasse from "nativescript-plugin-firebase"
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: "./login/login.component.html",
  styleUrls: ['./login/login.component.css']
})
export class LoginComponent implements OnInit {
  email= "user1@gmail.com"
  password= "1234"
  constructor(private router:Router) { }

  ngOnInit() { }
  login() {
    console.log(this.email + " " + this.password)
    firebasse.login({
      type: firebasse.LoginType.PASSWORD,
      passwordOptions: {
        email: this.email,
        password: this.password
      }
    }).then(() => {
      alert("login success");
      this.router.navigateByUrl("/chat")
    }, (error) => {
      console.log(error)
      alert("login failed")
    })
  }

}
