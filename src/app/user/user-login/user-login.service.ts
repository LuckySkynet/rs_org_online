import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../user-model';

@Injectable()
export class UserLoginService {

  private userLoginURL = 'app/users';
  private subject: Subject<User> = new Subject<User>();

  constructor(
    private http: Http
  ) { }

  public login(user: User) {
    console.log("user login service login...");
    return this.http.get(this.userLoginURL)
      .map((response: Response) => {
        let users = response.json().data as User[];
        //数组过滤的两种方式
        //1、find：返回一个对象
        //2、filter：返回一个对象数组
        let targetUser = users.find(targetUser => targetUser.username === user.username && targetUser.password === user.password);
        if (targetUser) {
          localStorage.setItem('currentUser', JSON.stringify(targetUser));
          this.subject.next(Object.assign({}, targetUser));
        }
        return targetUser;
      })
      .catch(this.handleError);
  }

  public logout() {
    console.log("user login service logout...");
    //退出登录移除
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
