import { Component, OnInit } from '@angular/core';
import * as firebase from "nativescript-plugin-firebase"
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: "./login/login.component.html",
  styleUrls: ['./login/login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {
    //this.email = "user1@gmail.com";
    // this.password = "123456"
  }

  ngOnInit() {

  }
  login() {

  }


}
