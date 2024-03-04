import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AuthGoogleService } from '../../services/auth/auth-google.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public authService: AuthService, public authGoogleService: AuthGoogleService) {}
}