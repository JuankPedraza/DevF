import React from "react";
import "./Footer.css";
import Fb from "../../assets/icon_fb.svg";
import Tw from "../../assets/icon_tw.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const _icono_carrito = (
    <FontAwesomeIcon className="footer-logo-svg" icon={faShoppingCart} />
  );
  return (
    <footer>
      <div class="footer-copyright">
        <p>&copy; 2021 ECOMMERCE DEVF</p>
      </div>
      <div class="footer-contactanos">
        {_icono_carrito}
        <p>CONTACTANOS</p>
      </div>
      <div class="footer-redes">
        <div class="footer-redes-facebook">
          <a href="/">
            <img src={Fb} alt="facebook" />
          </a>
        </div>
        <div class="footer-redes-twitter">
          <a href="/">
            <img src={Tw} alt="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
