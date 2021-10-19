import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";

function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {
      forbiddenName: {value: control.value}
    } : null;
  }
}

// Validate multiple form elements (Form Controls)
function forbiddenLengthValidator(control: AbstractControl): ValidationErrors | null {
   const name = control.get('name');
   const volume = control.get('volume');

   return (name!.value.length === volume!.value) ? {lengthMatches: true}: null;
}

@Component({
  selector: 'crm-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  public customerForm = this.fb.group({
    id: [],
    name: ['',
      [
        Validators.required,
        Validators.minLength(1),
        // Validators.pattern()
        forbiddenNameValidator(/bob/i)
      ]
    ],
    volume: [0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ]
  }, {
    validators: forbiddenLengthValidator
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.loadCustomer();
    this.getFromResolver();
  }

  getFromResolver() {
    const customer: Customer = this.activatedRoute.snapshot.data.customer;
    this.customerForm.patchValue(customer);

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
