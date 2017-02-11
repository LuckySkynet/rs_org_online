import { Routes } from '@angular/router';
import { GameComponent } from './game.component';

export const GAME_ROUTES:Routes = [
  {
    path:'',
    component:GameComponent
  },
  {
    path:'hall/:no',
    component:GameComponent
  }
]