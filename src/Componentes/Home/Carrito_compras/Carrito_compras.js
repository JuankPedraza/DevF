import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import useEliminarCarrito from "./useEliminarCarrito";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Carrito_compras.css";
import { NavLink } from "react-router-dom";

function Carrito_compras() {
  const { carrito, quitarCarrito } = useContext(AuthContext);
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
        <div class="listado_articulos">
          <p>Artículos seleccionados:</p>
          <div class="contenedor-cards2">
            <React.Fragment>
              {carrito.length > 0 ? (
                carrito.map((product, index) => {
                  return (
                    <React.Fragment>
                      <div class="contenedor-card2">
                        <div class="contenedor-card2-img"></div>
                        <div class="contenedor-card2-titulo">
                          <p>{product.product_name}</p>
                        </div>
                        <div class="contenedor-card2-precio">
                          <p>$ {product.price}</p>
                          <button
                            class="contenedor-card2-eliminar"
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
                <div className="content-2-articles-no-productos">
                  <h1>No se encontraron productos</h1>
                </div>
              )}
            </React.Fragment>
          </div>
          <div class="contenedor-carrito-botones">
            <hr />
            <div class="contenedor-carrito-botones-contenedor">
              <NavLink
                to="/articulos"
                className="contenedor-carrito-botones-contenedor-volver"
              >
                VOLVER
              </NavLink>
              <NavLink
                to="/carrito-paso2"
                className="contenedor-carrito-botones-contenedor-siguiente"
              >
                SIGUIENTE
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <section id="skills">
        <h3>Carrito de Compras</h3>
        <ul class="grid">
          {carrito.length > 0 ? (
            carrito.map((product, index) => {
              return (
                <React.Fragment>
                  <li>
                    {product.image != null ? (
                      <img src={product.image} alt={product.product_name} />
                    ) : (
                      <img
                        src="https://i.ibb.co/0Jmshvb/no-image.png"
                        alt={product.product_name}
                      />
                    )}
                    <h4>{product.product_name}</h4>
                    <h4>$ {product.price}</h4>
                    <button
                      className="button"
                      onClick={() => {
                        quitarCarrito(product);
                      }}
                    >
                      Eliminar
                    </button>
                  </li>
                </React.Fragment>
              );
            })
          ) : (
            <div className="content-2-articles-no-productos">
              <h1>No se encontraron productos</h1>
            </div>
          )}
        </ul>
        <div className="total">
          {carrito.length > 0 && <h1>Total Compra: ${total}</h1>}
        </div>
      </section> */}
      <Footer />
    </React.Fragment>
  );
}
export default Carrito_compras;
