import { createSelector } from 'reselect';

const selectUser = state => state.auth;

export const selectCurrentUser = createSelector(
  selectUser,
  auth => auth.user
);

export const selectInitialFetch = createSelector(
  selectUser,
  auth => auth.initialFetch
);

export const selectIsAuthenticated = createSelector(
  selectUser,
  auth => auth.isAuthenticated
);
