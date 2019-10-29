import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SET_CURRENT_USER,
} from './authTypes';
import authReducer, { INITIAL_STATE } from './authReducer';

const userAuth = { uid: 123 };
const user = { id: 123 };
const errorMessage = 'error';

describe('authReducer', () => {
  test('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  // Login actions
  test('should set isLoggingIn-true, loginError-false if loginRequest action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: LOGIN_REQUEST,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isLoggingIn: true,
      loginError: false,
    });
  });

  test('should set isLoggingIn-false, isAuthenticated-true, userAuth-payload if loginSuccess action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: LOGIN_SUCCESS,
        payload: userAuth,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isLoggingIn: false,
      isAuthenticated: true,
      userAuth,
    });
  });

  test('should set isLoggingIn-false, isAuthenticated-false, loginError-true, errorAuth-payload if loginError action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: LOGIN_FAILURE,
        payload: errorMessage,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isLoggingIn: false,
      isAuthenticated: false,
      loginError: true,
      errorAuth: errorMessage,
    });
  });

  // SignUp actions
  test('should set isSigningUp-true, signupError-false if signupRequest action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: SIGN_UP_REQUEST,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isSigningUp: true,
      signUpError: false,
    });
  });

  test('should set isSigningUp-false, isAuthenticated-true, userAuth-payload if signupSuccess action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: SIGN_UP_SUCCESS,
        payload: userAuth,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isSigningUp: false,
      isAuthenticated: true,
      userAuth,
    });
  });

  test('should set isSigningUp-false, isAuthenticated-false, signupError-true, errorAuth-payload if signupError action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: SIGN_UP_FAILURE,
        payload: errorMessage,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isSigningUp: false,
      isAuthenticated: false,
      signUpError: true,
      errorAuth: errorMessage,
    });
  });

  // Logout actions
  test('should set isLoggingOut-true, logoutError-false if logoutRequest action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: LOGOUT_REQUEST,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isLoggingOut: true,
      logoutError: false,
    });
  });

  test('should set isLoggingOut-false, isAuthenticated-true, userAuth-payload if logoutSuccess action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: LOGOUT_SUCCESS,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isLoggingOut: false,
      isAuthenticated: false,
      userAuth: {},
    });
  });

  test('should set isLoggingOut-false, isAuthenticated-false, logoutError-true, errorAuth-payload if logoutError action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: LOGOUT_FAILURE,
        payload: errorMessage,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isLoggingOut: false,
      logoutError: true,
      errorAuth: errorMessage,
    });
  });

  // setCurrentUser action
  test('should set initialFetch-true, user-payload if setCurrentUser action', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: SET_CURRENT_USER,
        payload: user,
      })
    ).toEqual({
      ...INITIAL_STATE,
      initialFetch: true,
      user,
    });
  });
});
