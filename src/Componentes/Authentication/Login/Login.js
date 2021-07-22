import firebase from "firebase/app";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import { Link } from "react-router-dom";
import "firebase/auth";
import { FirebaseAuthProvider, IfFirebaseAuthed } from "@react-firebase/auth";
import { firebaseConfig } from "../../../constantes";
import "./Login.css";

function Login() {
  const { metodos } = useContext(AuthContext);

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <div>
        <div className="container-form">
          <form className="container-form-login">
            <div className="container-form-login-center">
              <div className="container-form-login-logo">
                <img
                  src="https://i.pinimg.com/originals/31/3c/11/313c1187480abab29cbfabfc39c8b9be.png"
                  alt="Logotipo"
                />
                <span className="container-form-login-title">
                  <strong>Ecommerce</strong>DevF
                </span>
              </div>
            </div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Usuario"
                //onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                //onChange={handleInputChange}
              />
            </div>
            {/* <button type="submit" onClick={onSubmit}> */}
            <button className="container-form-login-button-login" type="submit">
              Ingresar
            </button>

            <Link
              className="container-form-login-register-link"
              to={"/registro"}
            >
              Registrarse
            </Link>
          </form>
          <div className="container-form-login-google">
            <button
              className="container-form-login-google-button-login"
              onClick={metodos.sessionGoogle}
            >
              Ingresar con Google
            </button><br/>
            <Link
              className="container-form-login-register-link2"
              to={"/"}
            >
              Ingresar sin registrarse
            </Link>
          </div>
        </div>

        <div>
          <IfFirebaseAuthed>
            {() => {
              return (window.location.href = "/");
            }}
          </IfFirebaseAuthed>
        </div>
      </div>
    </FirebaseAuthProvider>
  );
}
export default Login;
