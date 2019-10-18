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
const signUpRequest = () => ({
  type: SIGN_UP_REQUEST,
});

const signUpSuccess = userAuth => ({
  type: SIGN_UP_SUCCESS,
  payload: userAuth,
});

const signUpError = errorMessage => ({
  type: SIGN_UP_FAILURE,
  payload: errorMessage,
});

// Login actions
const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = userAuth => ({
  type: LOGIN_SUCCESS,
  payload: userAuth,
});

const loginError = errorMessage => ({
  type: LOGIN_FAILURE,
  payload: errorMessage,
});

// Logout actions
const logOutRequest = () => ({
  type: LOGOUT_REQUEST,
});

const logOutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const logOutError = errorMessage => ({
  type: LOGOUT_FAILURE,
  payload: errorMessage,
});

const setCurrentUser = user => ({
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
  dispatch(logOutRequest());
  auth
    .signOut()
    .then(() => {
      dispatch(logOutSuccess());
      callback();
    })
    .catch(error => {
      dispatch(logOutError(error.message));
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
