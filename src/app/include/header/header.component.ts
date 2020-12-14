import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean;
  public isLoggedInUserName: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(res => {
      console.log('header status: ', res);
      this.isLoggedIn = res;
    });
    this.authService.isLoggedInUserName.subscribe(res => {
      console.log('header username: ', res);
      this.isLoggedInUserName = res;
    });
  }

}
