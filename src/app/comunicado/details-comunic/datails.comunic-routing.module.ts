import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComunicComponent } from './details-comunic.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComunicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsComunicComponentPageRoutingModule {}