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

const INITIAL_STATE = {
  isLoggingIn: false,
  isSigningUp: false,
  isLoggingOut: false,
  isAuthenticated: false,
  initialFetch: false,
  loginError: false,
  signUpError: false,
  logoutError: false,
  errorAuth: null,
  userAuth: null,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        userAuth: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        errorAuth: action.payload,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        signUpError: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: true,
        userAuth: action.payload,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: false,
        signUpError: true,
        errorAuth: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        userAuth: {},
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
        errorAuth: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        initialFetch: true,
      };
    default:
      return state;
  }
};
