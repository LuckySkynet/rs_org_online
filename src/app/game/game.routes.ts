import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game.component';

const GAME_ROUTES:Routes = [
  {
    path:'',
    component:GameComponent
  }，
  {
    path:'hall/:no',
    component:GameComponent
  }
]

export default RouterModule.forChild(GAME_ROUTES);
