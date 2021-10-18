import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerDashboardComponent} from "./customer-dashboard/customer-dashboard.component";
import {CustomerListComponent} from "./views/customer-list/customer-list.component";

const routes: Routes = [
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
