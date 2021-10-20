import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, tap} from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import {Router} from "@angular/router";



@Injectable()
export class AuthEffects {

  login$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(AuthActions.login),
          tap(() => {
            this.router.navigateByUrl('/customer-dashboard')
          })
        )

    }, { dispatch: false }
  )
  logout$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(AuthActions.logout),
          tap(() => {
            this.router.navigateByUrl('/login')
          })
        )

    }, { dispatch: false }
  )
  constructor(
    private actions$: Actions,
    private router: Router
    ) {}

}
