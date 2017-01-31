import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES:Routes = [
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

export default RouterModule.forRoot(APP_ROUTES,{useHash:true})
