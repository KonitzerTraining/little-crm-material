import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {CustomerService} from "../../services/customer.service";
import {createCustomerServiceMock} from "../../../../../../mocks/customer/customerServiceMock";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {customersMock} from "../../../../../../mocks/api/customers";

fdescribe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  let customerServiceMock: any;

  beforeEach(async () => {
    customerServiceMock = createCustomerServiceMock(customersMock);

    await TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      imports: [
        RouterTestingModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {
          provide: CustomerService, useValue: customerServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a delete method', () => {
    const id = customersMock[0].id
    component.delete(id);
    expect(customerServiceMock.deleteCustomer).toHaveBeenCalledWith(id);
  })
});
