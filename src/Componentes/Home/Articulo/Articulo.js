import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./Articulo.css";

function Articulo() {
  const [productoDetalle, setproductoDetalle] = useState([]);

  const { session, agregarCarrito } = useContext(AuthContext);
  var { id } = useParams();

  useEffect(() => {
    fetch("https://ecomerce-master.herokuapp.com/api/v1/item/" + id)
      .then((response) => response.json())
      .then((data) => {
        setproductoDetalle(data);
      });
  }, [id]);

  return (
    <React.Fragment>
      <Navbar />
      <div class="contenedor">
        <div class="contenedor-imagen">
          {productoDetalle.image != null ? (
            <div
              class="contenedor-imagen-img"
              style={{ backgroundImage: `url(${productoDetalle.image})` }}
            ></div>
          ) : (
            <div
              class="contenedor-imagen-img"
              style={{
                backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU")`,
              }}
            ></div>
          )}
        </div>
        <div>
          <div class="contenedor-titulo">
            <p>{productoDetalle.product_name}</p>
          </div>
          <hr />
          <div class="contenedor-descripcion">
            <p>{productoDetalle.description}</p>
          </div>
          <div class="contenedor-precio">
            <p>$ {productoDetalle.price}</p>
          </div>
          <div class="contenedor-botones">
            {session.isSignedIn ? (
              <div className="contenedor-botones-comprar">
                <NavLink
                  to="/articulos"
                  activeClassName="active"
                  class="contenedor-botones-comprar-button"
                  onClick={() => {
                    agregarCarrito(productoDetalle);
                  }}
                >
                  Comprar
                </NavLink>
              </div>
            ) : (
              <React.Fragment>
                <div className="contenedor-botones-login">
                  <NavLink
                    to="/login"
                    activeClassName="active"
                    class="contenedor-botones-login-button"
                  >
                    Login
                  </NavLink>
                </div>
                <div className="contenedor-botones-registro">
                  <NavLink
                    to="/login"
                    activeClassName="active"
                    class="contenedor-botones-registro-button"
                  >
                    Registro
                  </NavLink>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Articulo;
