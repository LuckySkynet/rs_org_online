import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login';
import { UserRegisterComponent } from './user-register';

const USER_ROUTES: Routes = [
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

export default RouterModule.forChild(USER_ROUTES);
