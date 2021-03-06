import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from "@ngrx/store";
import {isLoggedIn} from "../../auth/store/selectors/auth.selectors";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {

  constructor(
    private store: Store,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.pipe(
      select(isLoggedIn),
      tap((loggedIn) => {
        if(!loggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }

}
