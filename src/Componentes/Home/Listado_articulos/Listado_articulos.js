import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFiltro from "./useFiltro";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Footer from "../../Footer/Footer";
import "./Listado_articulos.css";

function Listado_articulos() {
  const [productos, setProductos] = useState([]);
  const [formState, setNewFormState] = useState({ filtro: "" });

  const { productoFiltrado } = useFiltro(productos, formState.filtro);

  useEffect(() => {
    fetch("https://ecomerce-master.herokuapp.com/api/v1/item")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewFormState((actualFormState) => {
      return { ...actualFormState, [name]: value };
    });
  };

  return (
    <div>
      <Navbar />

      <div>
        <Slider mostrar={false} />
        <div className="center">
          <section className="content-2">
            <h2 className="content-2-subheader">Todos los Artículos</h2>
            <form>
              <div>
                <input
                  name="filtro"
                  placeholder="Buscar articulo"
                  onChange={handleInputChange}
                  className="content-2-input_filtro"
                />
              </div>
            </form>
            <div className="content-2-articles">
              {productoFiltrado.length > 0 ? (
                productoFiltrado.map((product, index) => {
                  return (
                    <article
                      key={index}
                      className="content-2-articles-article-item"
                      id="article-template"
                    >
                      <div className="content-2-articles-article-item-image-wrap">
                        {product.image != null ? (
                          <img src={product.image} alt={product.product_name} />
                        ) : (
                          <img
                            src="https://i.ibb.co/0Jmshvb/no-image.png"
                            alt={product.product_name}
                          />
                        )}
                      </div>

                      <h2>{product.product_name}</h2>
                      <p>{product.category}</p>
                      <p>$ {product.price}</p>
                      <Link to={"/articulos/articulo/" + product._id}>
                        Ver mas
                      </Link>

                      <div className="clearfix"></div>
                    </article>
                  );
                })
              ) : (
                <div className="content-2-articles-no-productos">
                  <h1>No se encontraron productos</h1>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}
export default Listado_articulos;
