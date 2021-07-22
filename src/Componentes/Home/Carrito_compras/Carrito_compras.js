import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import useEliminarCarrito from "./useEliminarCarrito";

function Carrito_compras() {
  const { carrito, quitarCarrito } = useContext(AuthContext);
  const { total } = useEliminarCarrito(carrito);

  return (
    <React.Fragment>
      <Navbar />
      <section id="skills">
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
      </section>
      <Footer />
    </React.Fragment>
  );
}
export default Carrito_compras;
