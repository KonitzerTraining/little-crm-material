import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class OneCustomerResolver implements Resolve<Customer> {

  constructor(
    private customerService: CustomerService,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Customer> {

    return this.customerService.getCustomer(route.paramMap.get('id'));
  }
}
