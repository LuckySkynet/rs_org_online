import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserInfoComponent } from '../user/user-info';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path:'',
        loadChildren: 'app/game/game.module#GameModule'
      },
      {
        path:'game',
        loadChildren: 'app/game/game.module#GameModule'
      },
      {
        path:'info',
        component:UserInfoComponent
      }
    ]
  }
]

export default RouterModule.forChild(HOME_ROUTES);

