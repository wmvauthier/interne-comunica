import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheCovidPageRoutingModule } from './detalhe-covid-routing.module';

import { DetalheCovidPage } from './detalhe-covid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheCovidPageRoutingModule
  ],
  declarations: [DetalheCovidPage]
})
export class DetalheCovidPageModule {}
