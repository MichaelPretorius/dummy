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
const requestSignUp = () => ({
  type: SIGN_UP_REQUEST,
});

const signUpSuccess = userAuth => ({
  type: SIGN_UP_SUCCESS,
  payload: userAuth,
});

const signUpError = error => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

// Login actions
const requestLogin = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = userAuth => ({
  type: LOGIN_SUCCESS,
  payload: userAuth,
});

const loginError = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Logout actions
const requestLogOut = () => ({
  type: LOGOUT_REQUEST,
});

const logOutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const logOutError = error => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const loginUser = (email, password, callback) => dispatch => {
  dispatch(requestLogin());
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(loginSuccess(userAuth));
      callback();
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};

export const signUpUser = (email, password, data, callback) => dispatch => {
  dispatch(requestSignUp());
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
      dispatch(signUpError(error));
    });
};

export const logoutUser = callback => dispatch => {
  dispatch(requestLogOut());
  auth
    .signOut()
    .then(() => {
      dispatch(logOutSuccess());
      callback();
    })
    .catch(error => {
      dispatch(logOutError(error));
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
