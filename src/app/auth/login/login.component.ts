import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('myTemplate', {read: ViewContainerRef}) private viewTemplateRef: ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  /* async lazyLoadComponent() {
    this.viewContainerRef.clear();
    const {PrivacyComponent} = await import('./../../privacy/privacy.component');
    this.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(PrivacyComponent));
  } */

  async lazyLoadComponent() {
    await import('./../../privacy/privacy.component').then(({PrivacyComponent}) => {
      this.viewTemplateRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(PrivacyComponent));
    });
  }

}
