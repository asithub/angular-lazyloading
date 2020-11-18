import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import config from './../config/api.url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = config.root_api;
  private registrationURL = `${this.baseURL}/user/registration`;
  private loginURL = `${this.baseURL}/user/login`;
  private getAllUserURL = `${this.baseURL}/user`;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) { }

  registerUser(user): Observable<any> {
    return this.http.post<any>(this.registrationURL, user);
  }

  loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginURL, user);
  }

  isAuthenticated(): boolean {
    const gettoken = localStorage.getItem('JWT_TOKEN');
    return !this.jwtHelperService.isTokenExpired(gettoken);
    // return !!localStorage.getItem('JWT_TOKEN');
  }

  userList(): Observable<any> {
    return this.http.get(this.getAllUserURL);
  }
}
