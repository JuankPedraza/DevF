import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

function Slider() {
  return (
    <React.Fragment>
      <div className="textos">
        <p className="textos-primero">Everything you are looking for in one place</p>
        <h1 className="textos-segundo">
          The best items for your pet
        </h1>
        <p className="textos-tercero">Buy now and receive instantly</p>
      </div>
      <div className="imagen">
        <img src="https://www.hogarmania.com/archivos/201505/razas-gatos-2xl-668x400x80xX.jpg"/>
      </div>
      <div className="button-comprar-ahora">
        <Link to="/articulos" className="button-comprar-ahora-button">BUY NOW</Link>
      </div>
      <hr />
    </React.Fragment>
  );
}
export default Slider;
