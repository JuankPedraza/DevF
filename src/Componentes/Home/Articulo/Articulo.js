import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import './Articulo.css';

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
  }, []);

  return (
    <div>
      <Navbar />
      <div className="center">
        <section className="content-3">
          <Link id="registro_link" className="content-3-regresar" to={"/articulos"}>
            Regresar
          </Link>
          <article className="content-3-article-item2 content-3-article-article-detail2">
            <div className="content-3-article-item2-image-wrap">
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
            <div>
              <h1 className="content-3-article-item2-subheader">{productoDetalle.product_name}</h1>
              <p>{productoDetalle.description}</p>
              <p>$ {productoDetalle.price}</p>
              {session.isSignedIn ? (
                <button className="content-3-article-item2-btn" onClick={() => {agregarCarrito(productoDetalle)}}>Comprar</button>
              ) : (
                <div className="content-3-article-item2-botones_auth">
                  <Link
                    className="content-3-article-item2-btn"
                    to={"/login"}
                  >
                    Ingresar
                  </Link>
                  <Link
                    className="content-3-article-item2-btn"
                    to={"/registro"}
                  >
                    Registrarse
                  </Link>
                </div>
              )}
            </div>

            <div className="clearfix"></div>
          </article>
        </section>
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}
export default Articulo;
