import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Recomendados.css';

function Recomendados() {
  const [productosRecomendados, setProductosRecomendados] = useState([]);

  useEffect(() => {
    fetch("https://ecomerce-master.herokuapp.com/api/v1/item")
      .then((response) => response.json())
      .then((data) => {
        var dataCopia = data.slice(0, 8);

        setProductosRecomendados(dataCopia);
      });
  }, []);

  return (
    <div className="articles">
      {productosRecomendados !== "" ? (
        productosRecomendados.map((product, index) => {
          return (
            <article key={index} className="articles-article-item">
              <div className="articles-article-item-image-wrap">
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
              <Link to={"/articulos/articulo/" + product._id}>Ver mas</Link>

              <div className="clearfix"></div>
            </article>
          );
        })
      ) : (
        <div>
          <h1>Cargando. Por favor espere ....</h1>
        </div>
      )}
    </div>
  );
}
export default Recomendados;
