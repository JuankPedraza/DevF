import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="textos-ventajas">
      <div>
        <p className="textos-ventajas-confiable">CONFIABLE</p>
        <p className="textos-ventajas-confiable-p">
          Realiza tus compras con tranquilidad.
        </p>
      </div>
      <div>
        <p className="textos-ventajas-seguro">SEGURO</p>
        <p className="textos-ventajas-seguro-p">
          Compra y no te preocupes. Nosotros nos encargamos del resto.
        </p>
      </div>
      <div>
        <p className="textos-ventajas-rapido">RAPIDO</p>
        <p className="textos-ventajas-rapido-p">
          Compra tus productos y recibe al instante.
        </p>
      </div>
    </div>
  );
}
export default Sidebar;
