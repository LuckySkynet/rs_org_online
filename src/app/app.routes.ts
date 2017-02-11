import { Routes } from '@angular/router';

export const APP_ROUTES:Routes = [
  {
    path:'',
    redirectTo:'user',
    pathMatch:'full'
  },
  {
    path:'user',
    loadChildren:'app/user/user.module#UserModule'
  },
  {
    path:'home',
    loadChildren:'app/home/home.module#HomeModule'
  }
]
