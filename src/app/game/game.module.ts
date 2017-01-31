import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';
import GAME_ROUTES from './game.routes';

@NgModule({
  imports: [
    CommonModule,
    GAME_ROUTES
  ],
  declarations: [
    GameComponent
  ]
})
export class GameModule { }
