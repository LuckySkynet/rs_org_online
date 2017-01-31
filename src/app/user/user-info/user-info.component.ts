import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user-model';
import { UserLoginService } from '../user-login';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  private currentUser: User;

  constructor(
    private userLoginService: UserLoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl('/user/login');
  }

}
