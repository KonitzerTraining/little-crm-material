import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

const url = environment.apiUrl + 'customers/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private errorHandler(err: any) {
    return throwError(err.message);
  }

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(url)
      .pipe(
        retry(3),
        catchError(this.errorHandler)
      );
  }

  getCustomer(id: any): Observable<Customer> {
    return this.http.get<Customer>(url + id)
      .pipe(
        retry(3),
        catchError(this.errorHandler)
      );
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(url + id);
  }

  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(url, customer);
  }

  putCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(url + customer.id, customer);
  }
}
