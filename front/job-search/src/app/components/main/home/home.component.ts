import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../../../services/auth/auth-google.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  userEmail: string = '';  // user email
  userToken: string = ''; // user access token
  isLoggedIn: boolean = false; // checker isLoggedIn

  constructor(
    public authGoogleService: AuthGoogleService,
    public authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.authGoogleService.profileSubject.subscribe(profileData => {
      this.userEmail = profileData.email;
      this.userToken = profileData.token;
      this.isLoggedIn = !!profileData.email;
    });
  }

  logOutGoogle() { 
    this.authGoogleService.logout();
    this.isLoggedIn == false;
    this.router.navigate(['login']);
  }

  logOutApplicant() {
    this.cookieService.delete('accessToken');
    this.cookieService.delete('refreshToken');
    this.isLoggedIn == false;
    this.authService.logout().subscribe(
      response => {
        console.log('Logout successful', response);
        this.router.navigate(['login']);
      },
      error => {
        console.error('Logout failed', error);
      }
    );
  }
}
