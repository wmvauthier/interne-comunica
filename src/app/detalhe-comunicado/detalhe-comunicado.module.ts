import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheComunicadoPageRoutingModule } from './detalhe-comunicado-routing.module';

import { DetalheComunicadoPage } from './detalhe-comunicado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheComunicadoPageRoutingModule
  ],
  declarations: [DetalheComunicadoPage]
})
export class DetalheComunicadoPageModule {}
