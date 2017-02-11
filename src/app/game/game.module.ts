import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game.component';
import { GAME_ROUTES } from './game.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GAME_ROUTES)
  ],
  declarations: [
    GameComponent
  ]
})
export class GameModule { }
