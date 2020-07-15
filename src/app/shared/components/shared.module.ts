import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ChatComponent } from './chat/chat.component';
import { TitleComponent } from './title/title.component';
import { SubscribeComponent } from './layout/subscribe/subscribe.component';
import { PartnersComponent } from './layout/partners/partners.component';
import { TestimonialsComponent } from './layout/testimonials/testimonials.component';
import { IonicModule } from '@ionic/angular';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapabilitiesComponent } from './layout/capabilities/capabilities.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ChatComponent,
    BannerComponent,
    TitleComponent,
    SubscribeComponent,
    PartnersComponent,
    TestimonialsComponent,
    CapabilitiesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ChatComponent,
    BannerComponent,
    TitleComponent,
    SubscribeComponent,
    PartnersComponent,
    TestimonialsComponent,
    CapabilitiesComponent
  ]
})
export class SharedModule {}
