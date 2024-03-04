import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant-register',
  templateUrl: './applicant-register.component.html',
  styleUrl: './applicant-register.component.css'
})
export class ApplicantRegisterComponent implements OnInit {
  fullName: string = '';
  email: string = '';
  password: string = '';
  captcha: string = '';

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit(): void {
  }
  
  resolved(captchaResponse: string | null) {
    this.captcha = captchaResponse || '';
    console.log('resolved captcha with response: ' + this.captcha);
  }

  register() {
    if (this.captcha) {
      const data = {
        fullName: this.fullName,
        email: this.email,
        password: this.password
      };

      this.authService.registerApplicant(data).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.log('Please solve the captcha.');
    }
  }
}
