import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: HomePage
        },
        { path: 'pokemon-info/:name', loadChildren: () => import('./pages/pokemon-info/pokemon-info.module').then(m => m.PokemonInfoPageModule) }
      ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
