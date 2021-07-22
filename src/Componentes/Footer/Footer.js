import React from "react";
import "./Footer.css";
import Fb from '../../assets/icon_fb.svg';
import Tw from '../../assets/icon_tw.svg';

function Footer() {
  return (
    <footer>
      <div class="grid">
        <p class="copyright">Ecommerce DevF &copy; - 2021 - Juan Camilo</p>
        <ul class="social">
          <li>
            <a href="">
              <img src={Fb} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Tw} alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
