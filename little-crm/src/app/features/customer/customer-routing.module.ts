import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerDashboardComponent} from "./customer-dashboard/customer-dashboard.component";
import {CustomerListComponent} from "./views/customer-list/customer-list.component";
import {CustomerEditComponent} from "./views/customer-edit/customer-edit.component";
import {OneCustomerResolver} from "./resolvers/one-customer.resolver";
import {CustomerNewComponent} from "./views/customer-new/customer-new.component";
import {CustomerGuard} from "./guards/customer.guard";

const routes: Routes = [
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,
    canActivate: [CustomerGuard],
    children: [
      {
        path: '',
        component: CustomerListComponent
      },
      {
        path: 'new',
        component: CustomerNewComponent
      },
      {
        path: 'edit/:id',
        component: CustomerEditComponent,
        resolve: {
          customer: OneCustomerResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
