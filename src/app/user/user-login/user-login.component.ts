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
  private isSuccess: boolean = false;

  constructor(
    private userLoginService: UserLoginService,
    private router: Router,
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

  public doCaptcha(){
    let secret = '6Lf-NRQUAAAAAPfk2VCOQy6Oy9ZFSwD-wghbAFAW';
    let response = this.el.nativeElement.querySelector('#g-recaptcha-response').value;
    this.userLoginService.reCaptcha(secret, response)
      .subscribe(
        data => {
          console.info(data);
        },
        error => console.error(error)
      );
  }

  public doLogin(): void {
    this.doCaptcha();
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
