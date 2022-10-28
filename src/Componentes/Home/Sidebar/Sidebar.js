import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="textos-ventajas">
      <div>
        <p className="textos-ventajas-confiable">TRUSTWORTHY</p>
        <p className="textos-ventajas-confiable-p">
          Make your purchases with peace of mind.
        </p>
      </div>
      <div>
        <p className="textos-ventajas-seguro">SAFE</p>
        <p className="textos-ventajas-seguro-p">
          Buy and don't worry. We willl take care of the rest.
        </p>
      </div>
      <div>
        <p className="textos-ventajas-rapido">FAST</p>
        <p className="textos-ventajas-rapido-p">
          Buy your products and receive instantly.
        </p>
      </div>
    </div>
  );
}
export default Sidebar;
