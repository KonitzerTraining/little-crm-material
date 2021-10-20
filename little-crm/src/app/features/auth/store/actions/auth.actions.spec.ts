import {AuthActions} from "./action-types";

// suite
describe('loadAuths', () => {

  // spec
  it('should return an action', () => {
    expect(AuthActions.logout().type).toBe('[Top Menu] Logout');
  });

  // spec
  it('should return an action', () => {
    expect(AuthActions.login({ user: {id: 999, email: ''}}).type)
      .toBe('[Login Page] User Login');
  });
});
