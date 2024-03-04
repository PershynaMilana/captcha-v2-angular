import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

   //! Регистрация нового соискателя
   registerApplicant(credentials: { fullName: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register/applicant`, credentials);
  }

 //! Вход пользователя
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  //! выход пользователя
  logout() : Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

 //! Проверка, аутентифицирован ли пользователь
  isAuthenticated() : boolean {
    return this.checkIfUserIsAuthenticated();
  }

   //! Проверка наличия токена доступа в куках
  checkIfUserIsAuthenticated() : boolean {
    const accessToken = this.cookieService.get('accessToken');
    return !!accessToken;
  }

 //! Обновление токена доступа
  refreshToken(): Observable<any> {
    return this.http.post(`${this.baseUrl}/refresh-token`, {});
  }
}
