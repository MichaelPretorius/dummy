import { auth, firestore } from '../../firebase/firebase';
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

// Sign Up actions
export const signUpRequest = () => ({
  type: SIGN_UP_REQUEST,
});

export const signUpSuccess = userAuth => ({
  type: SIGN_UP_SUCCESS,
  payload: userAuth,
});

export const signUpError = errorMessage => ({
  type: SIGN_UP_FAILURE,
  payload: errorMessage,
});

// Login actions
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = userAuth => ({
  type: LOGIN_SUCCESS,
  payload: userAuth,
});

export const loginError = errorMessage => ({
  type: LOGIN_FAILURE,
  payload: errorMessage,
});

// Logout actions
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutError = errorMessage => ({
  type: LOGOUT_FAILURE,
  payload: errorMessage,
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const loginUser = (email, password, callback) => dispatch => {
  dispatch(loginRequest());
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(loginSuccess(userAuth));
      callback();
    })
    .catch(error => {
      dispatch(loginError(error.message));
    });
};

export const signUpUser = (email, password, data, callback) => dispatch => {
  dispatch(signUpRequest());
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(signUpSuccess(userAuth.user));

      const { displayName, email, phoneNumber, metadata } = userAuth.user;

      firestore.doc(`users/${userAuth.user.uid}`).set({
        displayName,
        email,
        phoneNumber,
        createdAt: metadata.creationTime,
        ...data,
      });

      callback();
    })
    .catch(error => {
      dispatch(signUpError(error.message));
    });
};

export const logoutUser = callback => dispatch => {
  dispatch(logoutRequest());
  auth
    .signOut()
    .then(() => {
      dispatch(logoutSuccess());
      callback();
    })
    .catch(error => {
      dispatch(logoutError(error.message));
    });
};

export const verifyAuth = () => dispatch => {
  auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      dispatch(loginSuccess(userAuth));
      firestore.doc(`/users/${userAuth.uid}`).onSnapshot(snapshot => {
        dispatch(
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        );
      });
    } else {
      dispatch(setCurrentUser(userAuth));
    }
  });
};
