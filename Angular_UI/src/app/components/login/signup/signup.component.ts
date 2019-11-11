import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../../services/auth/auth.service';
import { LookupsService } from 'src/app/services/master/lookups.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  roles: any = [];

  constructor(public authService: AuthService, private router: Router, private toastr: ToastrService, private _lookupsService: LookupsService) { }

  ngOnInit() {
    this._lookupsService.getLookups('USERROLES').subscribe(data => {
      var temp = data[0].values;
      this.roles = temp;
    });
  }

  onSubmit(form: NgForm) {
    this.authService.signupUser(form.value).subscribe(
      res => {
        this.toastr.success('User Signup Success. Sign in now to proceed.', 'YEAH!!!', {
          positionClass: 'toast-top-center' 
        });
        this.resetForm(form);
        this.router.navigateByUrl('/signin');
      },
      err => {
        if (err.status === 422) {
          this.toastr.error(err.error.join('<br/>'), 'OOPS!', {
            positionClass: 'toast-top-center' 
          });
        }
        else
          this.toastr.error('Something went wrong.Please contact admin.', 'OOPS!', {
            positionClass: 'toast-top-center' 
         });
      }
    );
  }

  resetForm(form: NgForm) {
    this.authService.selectedUser = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: ''
    };

    form.resetForm();
    this.serverErrorMessages = '';
  }
}
