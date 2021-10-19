import { createAction, props } from '@ngrx/store';
import {User} from "../../model/user";

/*
export const loadAuths = createAction(
  '[Auth] Load Auths'
);

export const loadAuthsSuccess = createAction(
  '[Auth] Load Auths Success',
  props<{ data: any }>()
);

export const loadAuthsFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);
*/

export const login = createAction(
  '[Login Page] User Login',
  props<{user: User}>()
);

export const logout = createAction(
  '[Top Menu] Logout'
);


