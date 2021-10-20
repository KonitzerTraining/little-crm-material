import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import {User} from "../../model/user";

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User | null | undefined
}

export const initialState: AuthState = {
  user: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      user: null
    }
  })

);

