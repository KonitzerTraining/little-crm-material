import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { CustomerNewComponent } from './views/customer-new/customer-new.component';
import {MaterialModule} from "../../material/material.module";


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerNewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
