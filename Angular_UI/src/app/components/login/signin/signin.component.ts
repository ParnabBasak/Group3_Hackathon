import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../../services/auth/auth.service';
import { Constants } from '../../utils/constants';

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

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe(
      res => {
        this.authService.setToken(res['token']);
        this.authService.loggedIn.next(true);
        this.authService.loggedInUser.next(res['user']);
        sessionStorage.setItem('loggedUser', res['user'].firstName + ' '+ res['user'].lastName);
        this.router.navigateByUrl('/dashboard');
      },
      err => {
        this.toastr.error(Constants.SYSTEM_ERROR_MESSAGE, 'OOPS!', {
          positionClass: 'toast-top-center' 
       });
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }

}
