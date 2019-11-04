import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';


//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* ToastrModule for Alerts */
import { ToastrModule } from 'ngx-toastr';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { SigninComponent } from './components/login/signin/signin.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/core/dashboard/dashboard.component'
import { AdminComponent } from './components/core/admin/admin.component';
import { ForecastComponent } from './components/core/forecast/forecast.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { AuthInterceptor } from './services/auth/auth.interceptor';

/* Routing */
import { ROUTES } from  './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    AdminComponent,
    ForecastComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ROUTES,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }