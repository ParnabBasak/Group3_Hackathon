import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  selectedUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  };

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient, private router: Router) {}

  signupUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }

  logout() {
    this.loggedIn.next(false);
    this.deleteToken();
    this.router.navigate(['/signin']);
  }

  //Helper Methods
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
}
