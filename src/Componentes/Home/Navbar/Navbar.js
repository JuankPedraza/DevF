import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function NavBar(props) {
  const { session, metodos, carrito } = useContext(AuthContext);
  const { user } = session;
  const _icono_carrito = (
    <FontAwesomeIcon className="header-logo-svg" icon={faShoppingCart} />
  );
  const _icono_mensaje = (
    <FontAwesomeIcon className="contacto-menu-email-svg" icon={faEnvelope} />
  );
  const _icono_telefono = (
    <FontAwesomeIcon className="contacto-menu-telefono-svg" icon={faPhone} />
  );

  return (
    <React.Fragment>
      {props.home === "home" && (
        <header className="header">
          <div className="header-logo">{_icono_carrito}</div>
          <div className="header-logo-texto">
            <h1>Ecommerce DevF</h1>
          </div>
          <div className="contacto-menu-email">{_icono_mensaje}</div>
          <div className="contacto-menu-email-texto">
            <p>info@ecommercedevf.com</p>
          </div>
          <div className="contacto-menu-telefono">{_icono_telefono}</div>
          <div className="contacto-menu-telefono-texto">
            <p>+57 3112159454</p>
          </div>
        </header>
      )}

      {session.isSignedIn && props.home !== "home" && (
        <header className="header">
          <div className="header-logo">{_icono_carrito}</div>
          <div className="header-logo-texto">
            <h1>Ecommerce DevF</h1>
          </div>
          <div className="menu-inicio">
            <NavLink to="/" activeClassName="active" className="menu-inicio-link">
              Inicio
            </NavLink>
          </div>
          <div className="menu-productos">
            <NavLink
              to="/articulos"
              activeClassName="active"
              className="menu-productos-link"
            >
              Productos
            </NavLink>
          </div>
          <div className="menu-carrito">
            <NavLink
              to="/carrito"
              activeClassName="active"
              className="menu-carrito-link"
            >
              Carrito ({carrito.length})
            </NavLink>
          </div>
          <div className="menu-usuario">
            {/* <svg class="lnr lnr-user">
              <use xlink:href="#lnr-user"></use>
            </svg> */}
            <NavLink
              to="/articulos"
              activeClassName="active"
              className="menu-usuario-link"
              onClick={metodos.logout}
            >
              {user.displayName} - Salir
            </NavLink>
          </div>
        </header>
      )}

      {!session.isSignedIn && props.home !== "home" && (
        <header className="header">
          <div className="header-logo">{_icono_carrito}</div>
          <div className="header-logo-texto">
            <h1>Ecommerce DevF</h1>
          </div>
          <div className="menu-inicio">
            <NavLink to="/" activeClassName="active" className="menu-inicio-link">
              Inicio
            </NavLink>
          </div>
          <div className="menu-productos">
            <NavLink
              to="/articulos"
              activeClassName="active"
              className="menu-productos-link"
            >
              Productos
            </NavLink>
          </div>
          <div className="menu-login">
            <NavLink
              to="/login"
              activeClassName="active"
              className="menu-login-button"
            >
              Login
            </NavLink>
          </div>
          <div className="menu-registro">
            <NavLink
              to="/login"
              activeClassName="active"
              className="menu-registro-button"
            >
              Registro
            </NavLink>
          </div>
        </header>
      )}
    </React.Fragment>
  );
}
export default NavBar;
