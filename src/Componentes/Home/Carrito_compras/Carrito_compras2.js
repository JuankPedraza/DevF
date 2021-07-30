import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import useEliminarCarrito from "./useEliminarCarrito";
import "./Carrito_compras2.css";

function Carrito_compras2() {
  const { carrito } = useContext(AuthContext);
  const { total } = useEliminarCarrito(carrito);

  const cambiaColorEf = function () {
    let botonEfectivo = document.getElementById("efectivo");
    let checkBoton = document.getElementById("check1");
    let compStyles = window.getComputedStyle(botonEfectivo);
    let valorBorder = compStyles.border;

    if (valorBorder === "2px solid rgba(45, 51, 50, 0.1)") {
      botonEfectivo.style.border = "2px solid rgb(5, 138, 126)";
      checkBoton.style.visibility = "visible";
      return;
    } else if (valorBorder === "2px solid rgb(5, 138, 126)") {
      botonEfectivo.style.border = "2px solid rgba(45, 51, 50, 0.1)";
      checkBoton.style.visibility = "hidden";
      return;
    }
  };

  const cambiaColorTc = function () {
    let botonTC = document.getElementById("tc");
    let checkBoton = document.getElementById("check2");
    let compStyles = window.getComputedStyle(botonTC);
    let valorBorder = compStyles.border;

    if (valorBorder === "2px solid rgba(45, 51, 50, 0.1)") {
      botonTC.style.border = "2px solid rgb(5, 138, 126)";
      checkBoton.style.visibility = "visible";
      return;
    } else if (valorBorder === "2px solid rgb(5, 138, 126)") {
      botonTC.style.border = "2px solid rgba(45, 51, 50, 0.1)";
      checkBoton.style.visibility = "hidden";
      return;
    }
  };

  const cambiaColorTd = function () {
    let botonTD = document.getElementById("td");
    let checkBoton = document.getElementById("check3");
    let compStyles = window.getComputedStyle(botonTD);
    let valorBorder = compStyles.border;

    if (valorBorder === "2px solid rgba(45, 51, 50, 0.1)") {
      botonTD.style.border = "2px solid rgb(5, 138, 126)";
      checkBoton.style.visibility = "visible";
      return;
    } else if (valorBorder === "2px solid rgb(5, 138, 126)") {
      botonTD.style.border = "2px solid rgba(45, 51, 50, 0.1)";
      checkBoton.style.visibility = "hidden";
      return;
    }
  };

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
            <div class="barra-progreso-circulo1 circulo" id="circulo1"></div>
            <div class="barra-progreso-circulo2 circulo" id="circulo2"></div>
            <div class="barra-progreso-circulo3 circulo"></div>
            <hr />
          </div>
          <div class="barra-progreso-textos">
            <p class="barra-progreso-textos1">REVISION</p>
            <p class="barra-progreso-textos2">PAGO</p>
            <p class="barra-progreso-textos3">RESUMEN</p>
          </div>
        </div>
        <div class="listado_medios">
          <p class="listado_medios-titulo">Pago</p>
          <p class="listado_medios-subtitulo">
            Selecciona el medio con el que realizaras el pago
          </p>
          <div class="contenedor-medios">
            <button
              class="contenedor-medios-pago"
              id="efectivo"
              onClick={cambiaColorEf}
            >
              <i class="fas fa-check" id="check1"></i>
              <i class="fas fa-money-bill-alt"></i>
              <p>Contra entrega</p>
            </button>
            <button
              class="contenedor-medios-pago"
              id="tc"
              onClick={cambiaColorTc}
            >
              <i class="fas fa-check" id="check2"></i>
              <i class="fab fa-cc-mastercard"></i>
              <p>Tarjeta credito</p>
            </button>
            <button
              class="contenedor-medios-pago"
              id="td"
              onClick={cambiaColorTd}
            >
              <i class="fas fa-check" id="check3"></i>
              <i class="fas fa-credit-card"></i>
              <p>Tarjeta debito</p>
            </button>
          </div>
          <div class="contenedor-carrito-botones">
            <hr />
            <div class="contenedor-carrito-botones-contenedor">
              <NavLink
                to="/carrito"
                className="contenedor-carrito-botones-contenedor-volver"
              >
                VOLVER
              </NavLink>
              <NavLink
                to="/carrito-resumen"
                className="contenedor-carrito-botones-contenedor-siguiente"
              >
                SIGUIENTE
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Carrito_compras2;
