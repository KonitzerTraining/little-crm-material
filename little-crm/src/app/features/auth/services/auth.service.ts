import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // return this.http.post<User>('/api/login', {email,password});

    return of({
      id: 42,
      email: 'example@axample.com'
    });
  }

}
