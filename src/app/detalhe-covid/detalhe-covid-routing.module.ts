import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheCovidPage } from './detalhe-covid.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheCovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheCovidPageRoutingModule {}
