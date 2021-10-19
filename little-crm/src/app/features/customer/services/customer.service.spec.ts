import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import {createHttpClientMock} from "../../../../../mocks/http/httpClientMock";
import {customersMock} from "../../../../../mocks/api/customers";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";

fdescribe('CustomerService', () => {
  let service: CustomerService;
  let httpClientMock = createHttpClientMock(customersMock);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient, useValue: httpClientMock
        }
      ]

    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should have getCustomers', () => {
    service.getCustomers();
    expect(httpClientMock.get).toHaveBeenCalled();
  });

  it('should have getCustomer', () => {
    service.getCustomer(customersMock[0].id);
    expect(httpClientMock.get).toHaveBeenCalled();
  });

  it('should have deleteCustomer', () => {
    service.deleteCustomer(customersMock[0].id);
    expect(httpClientMock.delete).toHaveBeenCalled();
  });

  it('should have postCustomer', () => {
    service.postCustomer(customersMock[0] as Customer);
    expect(httpClientMock.post).toHaveBeenCalled();
  });

  it('should have putCustomer', () => {
    service.putCustomer(customersMock[0] as Customer);
    expect(httpClientMock.put).toHaveBeenCalled();
  });
});
