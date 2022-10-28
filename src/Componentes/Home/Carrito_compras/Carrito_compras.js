import React, { useContext } from "react";
import { CarritoContext } from "../../../Contexts/Carrito/Carrito";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import useEliminarCarrito from "./useEliminarCarrito";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Carrito_compras.css";
import { NavLink } from "react-router-dom";
import BarraProgreso from "./Barra_progreso/Barra_progreso";

function Carrito_compras() {
  const { carrito, quitarCarrito } = useContext(CarritoContext);
  const { total } = useEliminarCarrito(carrito);
  const _icono_eliminar = (
    <FontAwesomeIcon
      className="contenedor-card2-eliminar-icono"
      icon={faTrash}
    />
  );
  return (
    <React.Fragment>
      <Navbar />
      <div className="contenedor-carrito">
        <BarraProgreso total={total} progreso={1} />
        <div className="listado_articulos">
          <p>Selected Articles:</p>
          <div className="contenedor-cards2">
            <React.Fragment>
              {carrito.length > 0 ? (
                carrito.map((product, index) => {
                  return (
                    <React.Fragment>
                      <div className="contenedor-card2">
                        <div
                          className="contenedor-card2-img"
                          style={{ backgroundImage: `url(${product.urlImage})` }}
                        ></div>
                        <div className="contenedor-card2-titulo">
                          <p>{product.title}</p>
                        </div>
                        <div className="contenedor-card2-precio">
                          <p>$ {product.price}</p>
                          <button
                            className="contenedor-card2-eliminar"
                            onClick={() => {
                              quitarCarrito(product);
                            }}
                          >
                            {_icono_eliminar}
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
              ) : (
                <div className="content-2-articles-no-productos-carrito">
                  <h1>No products found</h1>
                </div>
              )}
            </React.Fragment>
          </div>
          <div className="contenedor-carrito-botones">
            <hr />
            <div className="contenedor-carrito-botones-contenedor">
              <NavLink
                to="/articulos"
                className="contenedor-carrito-botones-contenedor-volver"
              >
                RETURN
              </NavLink>
              <NavLink
                to="/carrito-paso2"
                className="contenedor-carrito-botones-contenedor-siguiente"
              >
                NEXT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Carrito_compras;
