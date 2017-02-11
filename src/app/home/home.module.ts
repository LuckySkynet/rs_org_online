import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserInfoComponent } from '../user/user-info';
import { UserLoginService } from '../user/user-login';
import { HOME_ROUTES } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  declarations: [
    HomeComponent,
    UserInfoComponent
  ],
  providers:[
    UserLoginService
  ]

})

export class HomeModule { }
