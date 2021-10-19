import {of} from "rxjs";

export const createCustomerServiceMock = () => {
 const spyObject =  jasmine.createSpyObj('CustomerService', ['getCustomers', 'getCustomer', 'deleteCustomer', 'postCustomer', 'putCustomer'])


  spyObject.getCustomers.and.callFake(() => {
    return of([])
  })

  return spyObject;
}

