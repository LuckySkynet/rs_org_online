import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { User } from '../user-model';

@Injectable()
export class UserRegisterService {

  private userRegisterURL = 'app/users';

  constructor(private http: Http) { }

  //模拟http请求
  public register(user: User) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.userRegisterURL, JSON.stringify(user), options)
      .map((response:Response) => response.json().data)
      .catch(this.handleError);
  }

  //异常处理
  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
