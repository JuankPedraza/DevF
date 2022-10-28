import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import BarraProgreso from "./Barra_progreso/Barra_progreso";
import "./Carrito_compras3.css";

function Carrito_compras3() {
  // var { carrito } = useContext(AuthContext);

  // const { total } = useEliminarCarrito(carrito);
  let history = useHistory();

  function handleClick() {
    history.push("/articulos");
    window.location.reload();
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="contenedor-carrito">
        <BarraProgreso total='125000' progreso={3} />
        <div className="resumen">
          <p className="resumen-titulo">Successful payment</p>
          <div className="resumen-contenedor">
            <div className="resumen-contenedor-circulo">
              <i className="fas fa-check"></i>
            </div>
            <p className="resumen-contenedor-p1">
              The payment of your purchase for a value of
              <span> $125000</span> the day<span> friday october 28</span> at
              <span> 14:30 Hrs.</span>
              We will send you the proof of purchase to the registered mail.
              <br />
              <br />
              If you have questions, do not hesitate to contact us immediately.
            </p>
            <p className="resumen-contenedor-p2">
              <span>¡ Thanks for your purchase !</span>
            </p>
          </div>
          <div className="resumen-link">
            <NavLink
              to="/articulos"
              className="resumen-volver"
              onClick={handleClick}
            >
              Return to homepage
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Carrito_compras3;
