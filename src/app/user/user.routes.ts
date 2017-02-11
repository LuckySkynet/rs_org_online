import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login';
import { UserRegisterComponent } from './user-register';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserLoginComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  }
]

