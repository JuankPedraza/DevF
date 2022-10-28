import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import { CarritoContext } from "../../../Contexts/Carrito/Carrito";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function NavBar(props) {
  const { session, metodos } = useContext(AuthContext);
  const { carrito }  = useContext(CarritoContext);
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
            <h1>Ecommerce Cat's Land</h1>
          </div>
          <div className="contacto-menu-email">{_icono_mensaje}</div>
          <div className="contacto-menu-email-texto">
            <p>info@ecommercecatsland.com</p>
          </div>
          <div className="contacto-menu-telefono">{_icono_telefono}</div>
          <div className="contacto-menu-telefono-texto">
            <p>+57 3215005100</p>
          </div>
        </header>
      )}

      {session.isSignedIn && props.home !== "home" && (
        <header className="header">
          <div className="header-logo">{_icono_carrito}</div>
          <div className="header-logo-texto">
            <h1>Ecommerce Cat's Land</h1>
          </div>
          <div className="menu-inicio">
            <NavLink to="/" activeClassName="active" className="menu-inicio-link">
              Home
            </NavLink>
          </div>
          <div className="menu-productos">
            <NavLink
              to="/articulos"
              activeClassName="active"
              className="menu-productos-link"
            >
              Products
            </NavLink>
          </div>
          <div className="menu-carrito">
            <NavLink
              to="/carrito"
              activeClassName="active"
              className="menu-carrito-link"
            >
              Cart ({carrito.length})
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
              {user.displayName} - Log out
            </NavLink>
          </div>
        </header>
      )}

      {!session.isSignedIn && props.home !== "home" && (
        <header className="header">
          <div className="header-logo">{_icono_carrito}</div>
          <div className="header-logo-texto">
            <h1>Ecommerce Cat's Land</h1>
          </div>
          <div className="menu-inicio">
            <NavLink to="/" activeClassName="active" className="menu-inicio-link">
              Home
            </NavLink>
          </div>
          <div className="menu-productos">
            <NavLink
              to="/articulos"
              activeClassName="active"
              className="menu-productos-link"
            >
              Products
            </NavLink>
          </div>
          <div className="menu-login">
            <NavLink
              to="/login"
              activeClassName="active"
              className="menu-login-button"
            >
              Sign in
            </NavLink>
          </div>
          <div className="menu-registro">
            <NavLink
              to="/login"
              activeClassName="active"
              className="menu-registro-button"
            >
              Sign up
            </NavLink>
          </div>
        </header>
      )}
    </React.Fragment>
  );
}
export default NavBar;