import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrameBuybackPageRoutingModule } from './frame-buyback-routing.module';

import { FrameBuybackPage } from './frame-buyback.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule,
    FrameBuybackPageRoutingModule
  ],
  declarations: [FrameBuybackPage]
})
export class FrameBuybackPageModule {}
