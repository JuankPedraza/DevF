import firebase from "firebase/app";
import React from "react";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import { firebaseConfig } from "../../constantes";

const AuthContext = React.createContext(null);

const signIn = (email, password) => {
  let emailRegistro = email;
  let passwordRegistro = password;

  firebase
    .auth()
    .createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then((userCredential) => {})
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
    });
};

const signUp = (email, password) => {
  let emailLogin = email;
  let passwordLogin = password;

  firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
    });
};

const sessionGoogle = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleAuthProvider);
};

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "/";
    });
};

function Auth(props) {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <AuthContext.Provider
              value={{
                session: {
                  isSignedIn,
                  user,
                  providerId,
                },
                metodos: {
                  signIn,
                  signUp,
                  sessionGoogle,
                  logout,
                },
              }}
            >
              {props.children}
            </AuthContext.Provider>
          );
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
}

export default Auth;
export { AuthContext };
