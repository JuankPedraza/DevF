import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
      <section id="welcome" class="grid">
        <Link className="button" to={"/articulos"}>
          Regresar
        </Link>
        <div class="welcome-text">
          <h2>{productoDetalle.product_name}</h2>
          <p class="leading">{productoDetalle.description}</p>
          <p class="leading">$ {productoDetalle.price}</p>
          {session.isSignedIn ? (
            <button
              className="button"
              onClick={() => {
                agregarCarrito(productoDetalle);
              }}
            >
              Comprar
            </button>
          ) : (
            <div className="content-3-article-item2-botones_auth">
              <Link className="button" to={"/login"}>
                Ingresar
              </Link>
              <Link className="button" to={"/registro"}>
                Registrarse
              </Link>
            </div>
          )}
        </div>
        <div class="detalle-img">
          {productoDetalle.image != null ? (
            <img
              src={productoDetalle.image}
              alt={productoDetalle.product_name}
            />
          ) : (
            <img
              src="https://i.ibb.co/0Jmshvb/no-image.png"
              alt={productoDetalle.product_name}
            />
          )}
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
export default Articulo;
