import {of} from "rxjs";

export const createHttpClientMock = (mockData: any) => {
  const spyObject =  jasmine.createSpyObj('HttpClient', [
    'get',
    'put',
    'post',
    'delete',
  ])


  spyObject.get.and.callFake(() => {
    return of(mockData)
  })

  spyObject.put.and.callFake(() => {
    return of({})
  })

  spyObject.post.and.callFake(() => {
    return of(mockData[0])
  })

  spyObject.delete.and.callFake(() => {
    return of(mockData[0])
  })

  return spyObject;
}
