import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user-model';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private user: User = new User();

  constructor(
    private userLoginService: UserLoginService,
    private router: Router,
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

  public doLogin(): void {
    console.info(this.el.nativeElement.querySelector('#g-recaptcha-response').value); 
    this.userLoginService.login(this.user)
      .subscribe(
      data => {
        if (typeof(data) === 'undefined') {
          console.log('登录的用户不存在');
        } else {
          console.log('登录的用户ID为:',data.id,' 用户名:',data.username,' 密码:',data.password);
          this.router.navigateByUrl('home')
        }
      },
      error => console.error(error)
      );
  }

}
