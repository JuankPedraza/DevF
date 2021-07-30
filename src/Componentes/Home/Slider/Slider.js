import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

function Slider() {
  return (
    <React.Fragment>
      <div class="textos">
        <p class="textos-primero">Todo lo que buscas en un solo lugar</p>
        <h1 class="textos-segundo">
          Los mejores artículos para hacer tu hogar más cálido y acogedor
        </h1>
        <p class="textos-tercero">Compra ahora y recibe al instante</p>
      </div>
      <div class="imagen"></div>
      <div class="button-comprar-ahora">
        <Link to="/articulos" className="button-comprar-ahora-button">COMPRAR AHORA</Link>
      </div>
      <hr />
    </React.Fragment>
  );
}
export default Slider;
