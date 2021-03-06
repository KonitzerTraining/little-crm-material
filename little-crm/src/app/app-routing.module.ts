import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundPageComponent} from "./features/default-pages/not-found-page/not-found-page.component";
import {LegalNoticePageComponent} from "./features/legal-pages/legal-notice-page/legal-notice-page.component";
import {CustomerDashboardComponent} from "./features/customer/customer-dashboard/customer-dashboard.component";
import {StartPageComponent} from "./features/start-page/start-page/start-page.component";
import {LoginPageComponent} from "./features/auth/views/login-page/login-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartPageComponent
  },
/*  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent
  },*/
  {
    path: 'legal-notice',
    loadChildren: () => import('./features/legal-pages/legal-pages.module').then(m => m.LegalPagesModule)
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
