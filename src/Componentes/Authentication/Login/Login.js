import firebase from "firebase/app";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import { Link } from "react-router-dom";
import "firebase/auth";
import { FirebaseAuthProvider, IfFirebaseAuthed } from "@react-firebase/auth";
import { firebaseConfig } from "../../../constantes";
import logoLogin from "../../../assets/log.svg";
import logoRegistro from "../../../assets/register.svg";
import "./Login.css";

function Login() {
  const { metodos } = useContext(AuthContext);
  const container = document.querySelector(".container");

  const signupClick = () => {
    container.classList.add("sign-up-mode");
  };

  const signinClick = () => {
    container.classList.remove("sign-up-mode");
  };

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="" class="sign-in-form">
              <h2 class="title">Iniciar sesión</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Usuario" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
              </div>
              <input type="submit" value="Ingresar" class="btn solid" />
              <p class="social-text">O ingresa con las plataformas sociales</p>
              <div class="social-media">
                <Link to="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </Link>
                <Link
                  to="#"
                  class="social-icon"
                  onClick={metodos.sessionGoogle}
                >
                  <i class="fab fa-google"></i>
                </Link>
                <Link to="/" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </form>
            <form action="" class="sign-up-form">
              <h2 class="title">Registrarse</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Usuario" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
              </div>
              <input type="submit" value="Registrarse" class="btn solid" />
              <p class="social-text">
                O registrate con las plataformas sociales
              </p>
              <div class="social-media">
                <Link to="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </Link>
                <Link to="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </Link>
                <Link to="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>¿Nuevo aqui?</h3>
              <p>
                Regístrate y disfruta de todos los beneficios que tenemos para
                ti
              </p>
              <button
                class="btn transparent"
                id="sign-up-btn"
                onClick={() => signupClick()}
              >
                Registrarse
              </button>
              <img src={logoLogin} class="image" alt="" />
            </div>
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>¿Eres uno de nosotros?</h3>
              <p>
                Ingresa ahora y encuentra los mejores productos para tu hogar y
                todo en un solo lugar
              </p>
              <button
                class="btn transparent"
                id="sign-in-btn"
                onClick={() => signinClick()}
              >
                Ingresar
              </button>
              <img src={logoRegistro} class="image" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <IfFirebaseAuthed>
          {() => {
            return (window.location.href = "/");
          }}
        </IfFirebaseAuthed>
      </div>
    </FirebaseAuthProvider>
  );
}
export default Login;
