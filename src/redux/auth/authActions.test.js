import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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
import * as actions from './authActions';

const mockStore = configureStore([thunk]);
const mockCallback = jest.fn();

describe('Login actions', () => {
  test('should create loginRequest action', () => {
    expect(actions.loginRequest().type).toEqual(LOGIN_REQUEST);
  });

  test('should create loginSuccess action', () => {
    const mockUserAuth = {
      uid: 123,
    };
    const action = actions.loginSuccess(mockUserAuth);

    expect(action.type).toEqual(LOGIN_SUCCESS);
    expect(action.payload).toEqual(mockUserAuth);
  });

  test('should create loginError action', () => {
    const mockErrorMessage = {
      message: 'error',
    };
    const action = actions.loginError(mockErrorMessage);

    expect(action.type).toEqual(LOGIN_FAILURE);
    expect(action.payload).toEqual(mockErrorMessage);
  });

  test('should start loginUser action', () => {
    const store = mockStore();
    store.dispatch(actions.loginUser('email', 'password', mockCallback));
    const action = store.getActions();

    expect(action[0].type).toEqual(LOGIN_REQUEST);
  });
});

describe('SignUp actions', () => {
  test('should create signUpRequest action', () => {
    expect(actions.signUpRequest().type).toEqual(SIGN_UP_REQUEST);
  });

  test('should create signUpSuccess action', () => {
    const mockUserAuth = {
      uid: 123,
    };
    const action = actions.signUpSuccess(mockUserAuth);

    expect(action.type).toEqual(SIGN_UP_SUCCESS);
    expect(action.payload).toEqual(mockUserAuth);
  });

  test('should create signUpError action', () => {
    const mockErrorMessage = {
      message: 'error',
    };
    const action = actions.signUpError(mockErrorMessage);

    expect(action.type).toEqual(SIGN_UP_FAILURE);
    expect(action.payload).toEqual(mockErrorMessage);
  });

  test('should start signUpUser action', () => {
    const store = mockStore();
    store.dispatch(
      actions.signUpUser('email', 'password', { data: 123 }, mockCallback)
    );
    const action = store.getActions();

    expect(action[0].type).toEqual(SIGN_UP_REQUEST);
  });
});

describe('Logout actions', () => {
  test('should create logoutRequest action', () => {
    expect(actions.logoutRequest().type).toEqual(LOGOUT_REQUEST);
  });

  test('should create logoutSuccess action', () => {
    expect(actions.logoutSuccess().type).toEqual(LOGOUT_SUCCESS);
  });

  test('should create logoutError action', () => {
    const mockErrorMessage = {
      message: 'error',
    };
    const action = actions.logoutError(mockErrorMessage);

    expect(action.type).toEqual(LOGOUT_FAILURE);
    expect(action.payload).toEqual(mockErrorMessage);
  });

  test('should start logoutUser action', () => {
    const store = mockStore();
    store.dispatch(actions.logoutUser(mockCallback));
    const action = store.getActions();

    expect(action[0].type).toEqual(LOGOUT_REQUEST);
  });
});

describe('SetCurrentUser action', () => {
  test('should create setCurrentUser action', () => {
    const mockUser = {
      uid: 123,
    };
    const action = actions.setCurrentUser(mockUser);

    expect(action.type).toEqual(SET_CURRENT_USER);
    expect(action.payload).toEqual(mockUser);
  });
});
