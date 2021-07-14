import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import { Link } from "react-router-dom";
import './Register.css';

function Register() {
  const { session, user } = useContext(AuthContext);

  return (
    <div>
      <form className="container-form-register">
        <div className="container-form-register-center">
          <div className="container-form-register-logo">
            <img
              src="https://i.pinimg.com/originals/31/3c/11/313c1187480abab29cbfabfc39c8b9be.png"
              alt="Logotipo"
            />
            <span className="container-form-register-title">
              <strong>Ecommerce</strong>DevF
            </span>
          </div>
        </div>
        <div>
          <select name="tipo_documento">
            <option value="CC">Cedula de ciudadania</option>
            <option value="CE">Cedula de extranjeria</option>
            <option value="PA">Pasaporte</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Numero documento" />
        </div>
        <div>
          <input type="text" placeholder="Nombres" />
        </div>
        <div>
          <input type="text" placeholder="Apellidos" />
        </div>
        <div>
          <input type="text" placeholder="Usuario" />
        </div>
        <div>
          <input type="password" placeholder="Contraseña" />
        </div>
        <button className="container-form-register-button-register">Registrarse</button>
        <Link className="container-form-register-registro-link" to={'/login'} >¿Ya esta registrado?</Link>
      </form>
    </div>
  );
}
export default Register;
