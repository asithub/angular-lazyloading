import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  // @ViewChild('authTemplate', {read: ViewContainerRef}) private viewAuthTemplateRef: ViewContainerRef;
  // @ViewChild('registrationTemplate', {read: ViewContainerRef}) private myRegistrationTemplateRef: ViewContainerRef;

  constructor(
    // private viewContainerRef: ViewContainerRef,
    // private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    // this.lazyLoadLoginComponent();
  }

  /* async lazyLoadLoginComponent(): Promise<any> {
    const {LoginComponent} = await import('./login/login.component');
    this.viewAuthTemplateRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(LoginComponent));
  }

  async lazyLoadRegistrationComponent(): Promise<any> {
    this.viewAuthTemplateRef.detach(0);
    const {RegistrationComponent} = await import('./registration/registration.component');
    this.myRegistrationTemplateRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(RegistrationComponent));
  } */

}
