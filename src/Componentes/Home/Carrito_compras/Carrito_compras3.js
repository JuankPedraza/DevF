import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import useEliminarCarrito from "./useEliminarCarrito";
import "./Carrito_compras3.css";
import { NavLink } from "react-router-dom";

function Carrito_compras3() {
  const { carrito } = useContext(AuthContext);
  const { total } = useEliminarCarrito(carrito);

  return (
    <React.Fragment>
      <Navbar />
      <div class="contenedor-carrito">
        <div class="contenedor-carrito-titulo">
          <h1>Carrito de compras</h1>
        </div>
        <div class="contenedor-carrito-total">
          {carrito.length > 0 && <p>Precio total: ${total}</p>}
        </div>
        <div class="barra-progreso">
          <div class="barra-progreso-linea">
            <div class="barra-progreso-circulo1 circulo"></div>
            <div class="barra-progreso-circulo2 circulo"></div>
            <div class="barra-progreso-circulo3 circulo"></div>
            <hr />
          </div>
          <div class="barra-progreso-textos">
            <p class="barra-progreso-textos1">REVISION</p>
            <p class="barra-progreso-textos2">PAGO</p>
            <p class="barra-progreso-textos3">RESUMEN</p>
          </div>
        </div>
        <div class="resumen">
          <p class="resumen-titulo">Pago exitoso</p>
          <div class="resumen-contenedor">
            <div class="resumen-contenedor-circulo">
              <i class="fas fa-check"></i>
            </div>
            <p class="resumen-contenedor-p1">
              Se ha realizado correctamente el pago de tu compra por un valor de
              <span> ${total}</span> el día<span> lunes 26 de julio</span> a las
              <span> 14:30 Hrs.</span>
              Te enviaremos el comprobante de la compra al correo registrado.
              <br />
              <br />
              Si tienes dudas, no dudes en contactarnos inmediatamente.
            </p>
            <p class="resumen-contenedor-p2">
              <span>¡ Gracias por tu compra !</span>
            </p>
          </div>
          <div class="resumen-link">
            <NavLink to="/articulos" className="resumen-volver">
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
