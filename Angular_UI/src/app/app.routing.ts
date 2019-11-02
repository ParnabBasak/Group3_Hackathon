import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/login/signin/signin.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/core/dashboard/dashboard.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
];

export const ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});