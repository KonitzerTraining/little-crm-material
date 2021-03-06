import {Observable} from "rxjs";

export function createHttpObservable(url: string) {
  return  new Observable((observer: any) => {

    fetch(url)
      .then((respoonse) => {
        return respoonse.json()
      })
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(err => {
        observer.error('Connection lost')
      })
  })
}
