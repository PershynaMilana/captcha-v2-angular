import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantRegisterComponent } from './components/auth/register/applicant-register/applicant-register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/main/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OAuthModule } from 'angular-oauth2-oidc'; 

import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  declarations: [
    AppComponent,
    ApplicantRegisterComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OAuthModule.forRoot(), 
    HttpClientModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }