import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

function Slider() {
  return (
    <React.Fragment>
      <div className="textos">
        <p className="textos-primero">Todo lo que buscas en un solo lugar</p>
        <h1 className="textos-segundo">
          Los mejores artículos para hacer tu hogar más cálido y acogedor
        </h1>
        <p className="textos-tercero">Compra ahora y recibe al instante</p>
      </div>
      <div className="imagen"></div>
      <div className="button-comprar-ahora">
        <Link to="/articulos" className="button-comprar-ahora-button">COMPRAR AHORA</Link>
      </div>
      <hr />
    </React.Fragment>
  );
}
export default Slider;
