import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./pages/faq/faq.module').then(m => m.FAQPageModule)
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./pages/terms-of-service/terms-of-service.module').then(
        m => m.TermsOfServicePageModule
      )
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./pages/privacy-policy/privacy-policy.module').then(
        m => m.PrivacyPolicyPageModule
      )
  },
  {
    path: 'frame-buyback',
    loadChildren: () => import('./pages/frame-buyback/frame-buyback.module').then( m => m.FrameBuybackPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
