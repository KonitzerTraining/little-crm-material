import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'crm-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[] = [];
  public displayedColumns: string[] = ['id', 'name', 'volume', 'action'];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers () {
    this.customerService.getCustomers()
      .subscribe((customers: Customer[]) => {
        this.customers = customers;
      })
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe(() => {
        this.loadCustomers();
      })
  }
}
