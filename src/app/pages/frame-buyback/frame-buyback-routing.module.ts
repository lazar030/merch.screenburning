import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrameBuybackPage } from './frame-buyback.page';

const routes: Routes = [
  {
    path: '',
    component: FrameBuybackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrameBuybackPageRoutingModule {}
