import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheVideoPageRoutingModule } from './detalhe-video-routing.module';

import { DetalheVideoPage } from './detalhe-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheVideoPageRoutingModule
  ],
  declarations: [DetalheVideoPage]
})
export class DetalheVideoPageModule {}
