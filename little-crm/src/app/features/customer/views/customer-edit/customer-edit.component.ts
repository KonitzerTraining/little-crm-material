import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {FormBuilder} from "@angular/forms";
import {Customer} from "../../model/customer";

@Component({
  selector: 'crm-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  public customerForm = this.fb.group({
    id: [],
    name: [],
    volume: []
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer() {
      const id = this.activatedRoute.snapshot.params.id;
      this.customerService.getCustomer(id)
       .subscribe((customer) => {
         this.customerForm.patchValue(customer);
       })
  }

  submitHandler() {
    const customer: Customer = this.customerForm.value;
    this.customerService.putCustomer(customer)
      .subscribe(() => {
        this.router.navigateByUrl('/customer-dashboard')
      })

  }
}
