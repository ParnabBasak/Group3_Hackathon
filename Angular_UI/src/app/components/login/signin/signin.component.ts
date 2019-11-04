import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  model = {
    email: '',
    password: ''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //this.authService.login(true);

    this.authService.login(form.value).subscribe(
      res => {
        this.authService.setToken(res['token']);
        this.authService.loggedIn.next(true);
        this.router.navigateByUrl('/dashboard');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }

}
