import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/login/signin/signin.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/core/dashboard/dashboard.component'
import { AdminComponent } from './components/core/admin/admin.component';
import { ForecastComponent } from './components/core/forecast/forecast.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'forecast', component: ForecastComponent },
];

export const ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});