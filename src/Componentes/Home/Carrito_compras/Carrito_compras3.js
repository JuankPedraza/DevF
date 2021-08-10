import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import useEliminarCarrito from "./useEliminarCarrito";
import BarraProgreso from "./Barra_progreso/Barra_progreso";
import "./Carrito_compras3.css";
import { NavLink } from "react-router-dom";

function Carrito_compras3() {
  var { carrito } = useContext(AuthContext);

  const { total } = useEliminarCarrito(carrito);

  return (
    <React.Fragment>
      <Navbar />
      <div className="contenedor-carrito">
        <BarraProgreso total={total} progreso={3} />
        <div className="resumen">
          <p className="resumen-titulo">Pago exitoso</p>
          <div className="resumen-contenedor">
            <div className="resumen-contenedor-circulo">
              <i className="fas fa-check"></i>
            </div>
            <p className="resumen-contenedor-p1">
              Se ha realizado correctamente el pago de tu compra por un valor de
              <span> ${total}</span> el día<span> lunes 26 de julio</span> a las
              <span> 14:30 Hrs.</span>
              Te enviaremos el comprobante de la compra al correo registrado.
              <br />
              <br />
              Si tienes dudas, no dudes en contactarnos inmediatamente.
            </p>
            <p className="resumen-contenedor-p2">
              <span>¡ Gracias por tu compra !</span>
            </p>
          </div>
          <div className="resumen-link">
            <NavLink
              to="/articulos"
              className="resumen-volver"
            >
              Volver a la página de inicio
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Carrito_compras3;
