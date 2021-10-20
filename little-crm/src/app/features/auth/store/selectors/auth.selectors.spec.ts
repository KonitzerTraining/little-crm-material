
import * as fromAuth from '../reducers/auth.reducer';
import { selectAuthState } from './auth.selectors';
import {AuthState} from "../reducers/auth.reducer";
import {AuthSelectors} from "./auth-selectors-types";

fdescribe("Auth Selectors", () => {
  const initialState: AuthState = {
    user: {id : 999, email: 'test'}
  }

  it ('should select login', () => {
    const result = AuthSelectors.isLoggedIn.projector(initialState);
    expect(result).toEqual(true);
  })

  it ('should select logout', () => {
    const result = AuthSelectors.isLoggedOut.projector(initialState);
    expect(result).not.toEqual(true);
  })


})
