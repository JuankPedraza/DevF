import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div class="textos-ventajas">
      <div>
        <p class="textos-ventajas-confiable">CONFIABLE</p>
        <p class="textos-ventajas-confiable-p">
          Realiza tus compras con tranquilidad.
        </p>
      </div>
      <div>
        <p class="textos-ventajas-seguro">SEGURO</p>
        <p class="textos-ventajas-seguro-p">
          Compra y no te preocupes. Nosotros nos encargamos del resto.
        </p>
      </div>
      <div>
        <p class="textos-ventajas-rapido">RAPIDO</p>
        <p class="textos-ventajas-rapido-p">
          Compra tus productos y recibe al instante.
        </p>
      </div>
    </div>
  );
}
export default Sidebar;
