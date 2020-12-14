import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject, BehaviorSubject, Observable} from 'rxjs';
import config from './../config/api.url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = config.root_api;
  private registrationURL = `${this.baseURL}/user/registration`;
  private loginURL = `${this.baseURL}/user/login`;
  private getAllUserURL = `${this.baseURL}/user`;
  private deleteUserURL = `${this.baseURL}/user/delete/`;

  public isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedInUserName = new BehaviorSubject<string>('Asit');

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {}

  registerUser(user): Observable<any> {
    return this.http.post<any>(this.registrationURL, user);
  }

  loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginURL, user);
  }

  isAuthenticated(): boolean {
    const gettoken = localStorage.getItem('JWT_TOKEN');

    // console.log(this.jwtHelperService.getTokenExpirationDate(gettoken));
    // console.log(this.jwtHelperService.decodeToken(gettoken));

    return !this.jwtHelperService.isTokenExpired(gettoken);
    // return !!localStorage.getItem('JWT_TOKEN');
  }

  userList(): Observable<any> {
    return this.http.get(this.getAllUserURL);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(this.deleteUserURL + id);
  }
}
