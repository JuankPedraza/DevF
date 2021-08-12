import firebase from "firebase/app";
import React, { useState, useContext } from "react";
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
  // const container = document.querySelector(".container");
  // hacer con estado con el nombre de la clase, cambiando el estado
  const [modo, setModo] = useState(["container"]);
  const [formState, setNewFormState] = useState();

  const signupClick = () => {
    setModo("container sign-up-mode");
  };

  const signinClick = () => {
    setModo("container");
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    setNewFormState((actualFormState) => {
      return { ...actualFormState, [name]: value };
    });
  };

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <div className={modo}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Iniciar sesión</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Usuario" name="email" onChange={handleInputChange}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" name="password" onChange={handleInputChange}/>
              </div>
              <input type="button" value="Ingresar" className="btn solid" onClick={() => metodos.signUp(formState.email, formState.password)}/>
              <p className="social-text">
                O ingresa con las plataformas sociales
              </p>
              <div className="social-media">
                <Link to="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  to="#"
                  className="social-icon"
                  onClick={metodos.sessionGoogle}
                >
                  <i className="fab fa-google"></i>
                </Link>
                <Link to="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </form>
            <form action="" className="sign-up-form">
              <h2 className="title">Registrarse</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Usuario" name="usuario" onChange={handleInputChange}/>
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email" name="email" onChange={handleInputChange} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" name="password" onChange={handleInputChange} />
              </div>
              <input type="button" value="Registrarse" className="btn solid" onClick={() => metodos.signIn(formState.email, formState.password)} />
              <p className="social-text">
                O registrate con las plataformas sociales
              </p>
              <div className="social-media">
                <Link to="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </Link>
                <Link to="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>¿Nuevo aqui?</h3>
              <p>
                Regístrate y disfruta de todos los beneficios que tenemos para
                ti
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => signupClick()}
              >
                Registrarse
              </button>
              <img src={logoLogin} className="image" alt="" />
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>¿Eres uno de nosotros?</h3>
              <p>
                Ingresa ahora y encuentra los mejores productos para tu hogar y
                todo en un solo lugar
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => signinClick()}
              >
                Ingresar
              </button>
              <img src={logoRegistro} className="image" alt="" />
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
