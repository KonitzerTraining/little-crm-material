import {of} from "rxjs";

export const createCustomerServiceMock = (mockData: any) => {
 const spyObject =  jasmine.createSpyObj('CustomerService', ['getCustomers', 'getCustomer', 'deleteCustomer', 'postCustomer', 'putCustomer'])


  spyObject.getCustomers.and.callFake(() => {
    return of(mockData)
  })

  spyObject.getCustomer.and.callFake(() => {
    return of(mockData[0])
  })

  spyObject.deleteCustomer.and.callFake(() => {
    return of({})
  })

  spyObject.postCustomer.and.callFake(() => {
    return of(mockData[0])
  })

  spyObject.putCustomer.and.callFake(() => {
    return of(mockData[0])
  })

  return spyObject;
}

