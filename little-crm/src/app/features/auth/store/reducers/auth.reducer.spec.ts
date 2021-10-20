
import {authReducer, AuthState, initialState} from './auth.reducer';
import {AuthActions} from "../actions/action-types";

describe('Auth Reducer', () => {
  describe('an unknown action', () => {

    it('should return the previous state', () => {
      const action = {} as any;
      const result = authReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });


  describe('login Action', () => {
    it('should login', () => {
      const newState: AuthState = {
        user: {id: 999, email: 'test'}
      }

      const action = AuthActions.login({user: {id : 999, email: 'test'}})
      const state = authReducer(initialState, action);

      expect(state).toEqual(newState);
    })
  });

  describe('logout Action', () => {
    it('should logout', () => {
      const initialState = {
        user: {id : 999, email: 'test'}
      }
      const newState: AuthState = {
        user: null
      }

      const action = AuthActions.logout()
      const state = authReducer(initialState, action);

      expect(state).toEqual(newState);
    })
  });

});

