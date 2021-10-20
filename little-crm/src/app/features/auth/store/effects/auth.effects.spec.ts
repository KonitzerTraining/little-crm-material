import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {Observable, of} from 'rxjs';

import { AuthEffects } from './auth.effects';
import {Router} from "@angular/router";


fdescribe('AuthEffects', function () {
  let actions$: Observable<any>;
  let effects: AuthEffects;

  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        {
          provide: Router, useValue: routerSpy
        }
      ]
    });

    effects = TestBed.inject(AuthEffects);
  });

  it('login$', function () {
    actions$ = of({type: '[Login Page] User Login', user: {id: 999, email: 'test'}})
    effects.login$.subscribe();
    expect(routerSpy.navigateByUrl).toHaveBeenCalled()
  })

  it('login$', function () {
    actions$ = of({type: '[Top Menu] Logout'})
    effects.logout$.subscribe();
    expect(routerSpy.navigateByUrl).toHaveBeenCalled()
  })
});



/*
describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
*/
