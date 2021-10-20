import { createFeatureSelector, createSelector } from '@ngrx/store';
import {authFeatureKey, AuthState} from "../reducers/auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>(
  authFeatureKey
);

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => {
    return !!auth.user;
  }
)

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => {
    return !loggedIn;
  }
)
