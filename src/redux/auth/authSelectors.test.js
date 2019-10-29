import {
  selectCurrentUser,
  selectInitialFetch,
  selectIsAuthenticated,
} from './authSelectors';

const state = {
  auth: {
    user: { id: 123 },
    initialFetch: false,
    isAuthenticated: false,
  },
};

describe('authSelectors', () => {
  test('should return user when selectCurrentUser', () => {
    expect(selectCurrentUser(state)).toEqual({ id: 123 });
  });

  test('should return initialFetch when selectInitialFetch', () => {
    expect(selectInitialFetch(state)).toEqual(false);
  });

  test('should return isAuthenticated when selectIsAuthenticated', () => {
    expect(selectIsAuthenticated(state)).toEqual(false);
  });
});
