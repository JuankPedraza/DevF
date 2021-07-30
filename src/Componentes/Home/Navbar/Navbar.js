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
        <header class="header">
          <div class="header-logo">{_icono_carrito}</div>
          <div class="header-logo-texto">
            <h1>Ecommerce DevF</h1>
          </div>
          <div class="contacto-menu-email">{_icono_mensaje}</div>
          <div class="contacto-menu-email-texto">
            <p>info@ecommercedevf.com</p>
          </div>
          <div class="contacto-menu-telefono">{_icono_telefono}</div>
          <div class="contacto-menu-telefono-texto">
            <p>+57 3112159454</p>
          </div>
        </header>
      )}

      {session.isSignedIn && props.home !== "home" && (
        <header class="header">
          <div class="header-logo">{_icono_carrito}</div>
          <div class="header-logo-texto">
            <h1>Ecommerce DevF</h1>
          </div>
          <div class="menu-inicio">
            <NavLink to="/" activeClassName="active" class="menu-inicio-link">
              Inicio
            </NavLink>
          </div>
          <div class="menu-productos">
            <NavLink
              to="/articulos"
              activeClassName="active"
              class="menu-productos-link"
            >
              Productos
            </NavLink>
          </div>
          <div class="menu-carrito">
            <NavLink
              to="/carrito"
              activeClassName="active"
              class="menu-carrito-link"
            >
              Carrito ({carrito.length})
            </NavLink>
          </div>
          <div class="menu-usuario">
            {/* <svg class="lnr lnr-user">
              <use xlink:href="#lnr-user"></use>
            </svg> */}
            <NavLink
              to="/articulos"
              activeClassName="active"
              class="menu-usuario-link"
              onClick={metodos.logout}
            >
              {user.displayName} - Salir
            </NavLink>
          </div>
        </header>
      )}

      {!session.isSignedIn && props.home !== "home" && (
        <header class="header">
          <div class="header-logo">{_icono_carrito}</div>
          <div class="header-logo-texto">
            <h1>Ecommerce DevF</h1>
          </div>
          <div class="menu-inicio">
            <NavLink to="/" activeClassName="active" class="menu-inicio-link">
              Inicio
            </NavLink>
          </div>
          <div class="menu-productos">
            <NavLink
              to="/articulos"
              activeClassName="active"
              class="menu-productos-link"
            >
              Productos
            </NavLink>
          </div>
          <div class="menu-login">
            <NavLink
              to="/login"
              activeClassName="active"
              class="menu-login-button"
            >
              Login
            </NavLink>
          </div>
          <div class="menu-registro">
            <NavLink
              to="/registro"
              activeClassName="active"
              class="menu-registro-button"
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
