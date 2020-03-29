import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheVideoPage } from './detalhe-video.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheVideoPageRoutingModule {}
