import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/Auth/Auth";
import "./Barra_progreso.css";

function BarraProgreso(props) {
  const { carrito } = useContext(AuthContext);

  return (
    <div className="contenedor-carrito">
      <div className="contenedor-carrito-titulo">
        <h1>Carrito de compras</h1>
      </div>
      <div className="contenedor-carrito-total">
        {carrito.length > 0 && <p>Precio total: ${props.total} </p>}
      </div>
      <div className="barra-progreso">
        <div className="barra-progreso-linea">
          {props.progreso === 1 && (
            <React.Fragment>
              <div className="barra-progreso-circulo1 circulo pintar"></div>
              <div className="barra-progreso-circulo2 circulo"></div>
              <div className="barra-progreso-circulo3 circulo"></div>
            </React.Fragment>
          )}
          {props.progreso === 2 && (
            <React.Fragment>
              <div className="barra-progreso-circulo1 circulo pintar"></div>
              <div className="barra-progreso-circulo2 circulo pintar"></div>
              <div className="barra-progreso-circulo3 circulo"></div>
            </React.Fragment>
          )}
          {props.progreso === 3 && (
            <React.Fragment>
              <div className="barra-progreso-circulo1 circulo pintar"></div>
              <div className="barra-progreso-circulo2 circulo pintar"></div>
              <div className="barra-progreso-circulo3 circulo pintar"></div>
            </React.Fragment>
          )}

          <hr />
        </div>
        <div className="barra-progreso-textos">
          <p className="barra-progreso-textos1">REVISION</p>
          <p className="barra-progreso-textos2">PAGO</p>
          <p className="barra-progreso-textos3">RESUMEN</p>
        </div>
      </div>
    </div>
  );
}
export default BarraProgreso;
