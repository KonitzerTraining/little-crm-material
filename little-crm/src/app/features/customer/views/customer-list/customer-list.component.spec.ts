import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {CustomerService} from "../../services/customer.service";
import {createCustomerServiceMock} from "../../../../../../mocks/customer/customerServiceMock";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

fdescribe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  const customerServiceMock = createCustomerServiceMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      imports: [
        RouterTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
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
});
