import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFiltro from "./useFiltro";
import Navbar from "../Navbar/Navbar";
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
    <React.Fragment>
      <Navbar />
      <div class="buscador">
        <div class="buscador-texto">
          <h1>Encuentra el producto que necesitas:</h1>
        </div>
        <div class="buscador-input">
          <input
            type="text"
            name="filtro"
            onChange={handleInputChange}
            placeholder="Buscar ..."
          />
        </div>
      </div>
      <div class="contenedor">
        {productoFiltrado.length > 0 ? (
          productoFiltrado.map((product, index) => {
            return (
              <React.Fragment>
                <div class="contenedor-card">
                  <Link
                    to={"/articulos/articulo/" + product._id}
                    className="contenedor-link-card"
                  >
                    <div class="contenedor-card-img"></div>
                    <div class="contenedor-card-titulo">
                      <p>{product.product_name}</p>
                    </div>
                    <div class="contenedor-card-descripcion">
                      <p>{product.description}</p>
                    </div>
                    <div class="contenedor-card-precio">
                      <p>$ {product.price}</p>
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            );
          })
        ) : (
          <div className="content-2-articles-no-productos">
            <h1>No se encontraron productos</h1>
          </div>
        )}
        {/* <div class="contenedor-card">
          <div class="contenedor-card-img"></div>
          <div class="contenedor-card-titulo">
            <p>OLLA COCINA</p>
          </div>
          <div class="contenedor-card-descripcion">
            <p>Olla para cocinar comida y papa</p>
          </div>
          <div class="contenedor-card-precio">
            <p>$ 82.000</p>
          </div>
        </div> */}
      </div>
      {/* <section id="skills">
        <h3>Todos los Artículos</h3>
        <input
          name="filtro"
          placeholder="Buscar articulo"
          onChange={handleInputChange}
          className="content-2-input_filtro"
        />
        <ul class="grid">
          {productoFiltrado.length > 0 ? (
            productoFiltrado.map((product, index) => {
              return (
                <React.Fragment>
                  <li>
                    <Link to={"/articulos/articulo/" + product._id}>
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
                    </Link>
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
      </section> */}
      <Footer />
    </React.Fragment>
  );
}
export default Listado_articulos;
