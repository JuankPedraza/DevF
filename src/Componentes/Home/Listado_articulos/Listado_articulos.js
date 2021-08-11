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
    //fetch("http://localhost:3000/api/productos")
    fetch("https://inspiring-wilson-c9c78d.netlify.app/.netlify/functions/server/api/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.productos);
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
      <div className="buscador">
        <div className="buscador-texto">
          <h1>Encuentra el producto que necesitas:</h1>
        </div>
        <div className="buscador-input">
          <input
            type="text"
            name="filtro"
            onChange={handleInputChange}
            placeholder="Buscar ..."
          />
        </div>
      </div>
      <div className="contenedor">
        {productoFiltrado.length > 0 ? (
          productoFiltrado.map((product, index) => {
            return (
              <React.Fragment>
                <div key={index} className="contenedor-card">
                  <Link
                    to={"/articulos/articulo/" + product._id}
                    className="contenedor-link-card"
                  >
                    {product.image != null ? (
                      <div
                        className="contenedor-card-img"
                        style={{ backgroundImage: `url(${product.image})` }}
                      ></div>
                    ) : (
                      <div
                        className="contenedor-card-img"
                        style={{
                          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU")`,
                        }}
                      ></div>
                    )}
                    <div className="contenedor-card-titulo">
                      <p>{product.product_name}</p>
                    </div>
                    <div className="contenedor-card-descripcion">
                      <p>{product.description}</p>
                    </div>
                    <div className="contenedor-card-precio">
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
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Listado_articulos;
