import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserLoginComponent, UserLoginService } from './user-login';
import { UserRegisterComponent, UserRegisterService, EqualValidator } from './user-register';
import { USER_ROUTES } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(USER_ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    EqualValidator
  ],
  providers:[
    UserLoginService,
    UserRegisterService
  ]
})

export class UserModule { }
