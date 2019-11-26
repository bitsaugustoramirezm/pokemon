import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pages/pokemon/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  /*
  {
    path: 'pokemon/pokemon-info',
    loadChildren: () => import('./pages/pokemon/pages/pokemon-info/pokemon-info.module').then( m => m.PokemonInfoPageModule)
  },
  */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
