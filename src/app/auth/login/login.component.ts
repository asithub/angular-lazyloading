import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ViewChild('myTemplate', {read: ViewContainerRef}) private viewTemplateRef: ViewContainerRef;
  formLogin: FormGroup;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private jwtHelperService: JwtHelperService
  )
  { }

  ngOnInit(): void {

    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  submitForm(): void{
    this.authService.loginUser(this.formLogin.value).subscribe(data => {
      if (data.status === 404 || data.status === 401) {
        console.log('Login Error: ', data.response);
      } else {
        const decodeToken = this.jwtHelperService.decodeToken(data.access_token);
        const decodeUserName = this.jwtHelperService.decodeToken(data.access_token).user.name;
        // console.log(this.jwtHelperService.decodeToken(data.access_token));
        localStorage.setItem('JWT_TOKEN', data.access_token);

        this.authService.isLoggedIn.next(true);
        this.authService.isLoggedInUserName.next(decodeUserName);
        this.authService.isLoggedInUserName.subscribe(res => {
          console.log('login: ', res);
        });
        this.router.navigate(['/auth/user']);
      }
    });
  }

  /* async lazyLoadComponent(): Promise<any> {
    this.viewContainerRef.clear();
    const {RegistrationComponent} = await import('./../registration/registration.component');
    this.viewTemplateRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(RegistrationComponent));
  } */

  /* async lazyLoadComponent(): Promise<any> {
    await import('./../registration/registration.component').then(({RegistrationComponent}) => {
      this.viewTemplateRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(RegistrationComponent));
    });
  } */

}
