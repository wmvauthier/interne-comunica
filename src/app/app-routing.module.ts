import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  {
    path: 'covid',
    loadChildren: () => import('./covid/covid.module').then( m => m.CovidPageModule)
  },
  {
    path: 'comunicado',
    loadChildren: () => import('./comunicado/comunicado.module').then( m => m.ComunicadoPageModule)
  },
  {
    path: 'detalhe-comunicado',
    loadChildren: () => import('./detalhe-comunicado/detalhe-comunicado.module').then( m => m.DetalheComunicadoPageModule)
  },
  {
    path: 'detalhe-video',
    loadChildren: () => import('./detalhe-video/detalhe-video.module').then( m => m.DetalheVideoPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'detalhe-covid',
    loadChildren: () => import('./detalhe-covid/detalhe-covid.module').then( m => m.DetalheCovidPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
