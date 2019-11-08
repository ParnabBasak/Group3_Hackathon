import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/login/signin/signin.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/core/dashboard/dashboard.component';
import { AdminComponent } from './components/core/admin/admin.component';
import { ForecastComponent } from './components/core/forecast/forecast.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { AuthGuard } from './services/auth/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'signin', component: SigninComponent },
  { path: 'logout', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent },
  { path: 'forecast', component: ForecastComponent },
  { path: '**', component: ErrorComponent }
];

export const ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});
