import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FAQPageRoutingModule } from './faq-routing.module';

import { FAQPage } from './faq.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FAQPageRoutingModule
  ],
  declarations: [FAQPage]
})
export class FAQPageModule {}
