import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userDisplayName = '';
  userRole = '';
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.loggedInUser.subscribe(user => {
      let userFormattedDisplayName = '';
      if(typeof user.firstName != undefined && user.firstName != undefined) {
        userFormattedDisplayName = user.firstName;
      }
      if(typeof user.lastName != undefined && user.lastName != undefined) {
        userFormattedDisplayName = userFormattedDisplayName + ' ' + user.lastName;
      }
      if(typeof user.role != undefined && user.role != undefined) {
        this.userRole = user.role;
      }

      this.userDisplayName = userFormattedDisplayName;
    })
  }

  onLogout() {
    this.authService.logout();
    this.userDisplayName = '';
  }

}
