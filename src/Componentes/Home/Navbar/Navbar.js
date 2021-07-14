import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import "./Navbar.css";

function NavBar() {
  const { session, metodos, carrito } = useContext(AuthContext);
  const { user } = session;

  return (
    <header className="header">
      {session.isSignedIn ? (
        <div className="center">
          <div className="header-logo">
            <img
              src="https://i.pinimg.com/originals/31/3c/11/313c1187480abab29cbfabfc39c8b9be.png"
              alt="Logotipo"
            />
            <span className="header-titulo">
              <strong>Ecommerce</strong>DevF
            </span>
          </div>

          <nav className="header-menu">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/articulos" activeClassName="active">
                  Ver todos los Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="/carrito" activeClassName="active">
                  Carrito de Compras ({carrito.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeClassName="active">
                  {user.displayName}
                </NavLink>
              </li>
              <li>
                <button className="header-menu-salir" onClick={metodos.logout}>
                  Salir
                </button>
              </li>
            </ul>
          </nav>

          <div className="clearfix"></div>
        </div>
      ) : (
        <div className="center">
          <div className="header-logo">
            <img
              src="https://i.pinimg.com/originals/31/3c/11/313c1187480abab29cbfabfc39c8b9be.png"
              alt="Logotipo"
            />
            <span className="header-titulo">
              <strong>Ecommerce</strong>DevF
            </span>
          </div>

          <nav className="header-menu">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/articulos" activeClassName="active">
                  Ver todos los Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" activeClassName="active">
                  Ingresar
                </NavLink>
              </li>
              <li>
                <NavLink to="/registro" activeClassName="active">
                  Registrarse
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="clearfix"></div>
        </div>
      )}
    </header>
  );
}
export default NavBar;
