import { TestBed } from '@angular/core/testing';

import { OneCustomerResolver } from './one-customer.resolver';

describe('OneCustomerResolver', () => {
  let resolver: OneCustomerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OneCustomerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
