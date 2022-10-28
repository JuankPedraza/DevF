import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import { CarritoContext } from "../../../Contexts/Carrito/Carrito";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./Articulo.css";

function Articulo() {
  const [productoDetalle, setproductoDetalle] = useState([]);
  const { agregarCarrito } = useContext(CarritoContext);

  const { session } = useContext(AuthContext);
  var { id } = useParams();
  let productosData = [
    {
      id: 1,
      title: "Sanitary sand Freemiau",
      description:
        "Freemiau cat litter is a clumping and super absorbent litter that will be ideal for the sanitary use of your cat.",
      urlImage: "https://cdn.shopify.com/s/files/1/0410/2199/7206/products/freemiau-arena-para-gatos-x-10-kgs_5087d08f-52ab-428f-8fdb-212fdc662747.jpg?v=1596329522",
      price: 33617,
    },
    {
      id: 2,
      title: "Cat Chow kittens",
      description: "Purina Cat Chow Concentrate for Kittens will be the ideal food to provide your kitten until it reaches its first year of life.",
      urlImage: "https://animalscenter.com/2779-home_default/8-kg-cat-chow-gatitos.jpg",
      price: 109899,
    },
    {
      id: 3,
      title: "Whiskas",
      description: "Whiskas Tuna in Sauce wet cat food is a delicious and balanced food that your cat will enjoy.",
      urlImage: "https://www.agrocampo.com.co/media/catalog/product/cache/d232de82c00ff10f6c1ef41dcad0dd79/1/1/111110219-min_1.jpg",
      price: 3200,
    },
    {
      id: 4,
      title: "Dustpan",
      description:
        "The Moderna Colander-type cat poop scoop is a cat litter scoop made of premium plastic.",
      urlImage: "https://static.wixstatic.com/media/ae9cf9_9b83d0426f8240f3b9a2f02e81328952~mv2.png/v1/fill/w_364,h_518,al_c/ae9cf9_9b83d0426f8240f3b9a2f02e81328952~mv2.png",
      price: 7000,
    },
    {
      id: 5,
      title: "Sandbox",
      description: "Sandbox Toilet Mika 57.5 L x 51.5AN x 42H cm.",
      urlImage: "https://animalscenter.com/1611-large_default/arenera-para-gatos-esquinera.jpg",
      price: 170000,
    },
    {
      id: 6,
      title: "Necklace",
      description: "Cat safety collar.",
      urlImage: "https://http2.mlstatic.com/D_NQ_NP_715755-MCO42331474696_062020-O.jpg",
      price: 15000,
    },
    {
      id: 7,
      title: "Gym",
      description:
        "Trixie Felicitas Post Cat Gym H 190 cm Coffee.",
      urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7h38bAto3SbZFeE3AVhcAqsJBlLzgvxFPPg&usqp=CAU",
      price: 390000,
    },
    {
      id: 8,
      title: "Happy cats toy",
      description: "Cute cat toy, suitable for entertaining your pet for several hours, you can place it on the floor so that your pet can lie down and interact with the hanging toy.",
      urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NR-0kg-bw3hSkNqy3Ll-pvtxCeRjqmEl3A&usqp=CAU",
      price: 51900,
    },
    {
      id: 9,
      title: "Dinning room",
      description: "Cat bowl with automatic water dispenser.",
      urlImage: "https://m.media-amazon.com/images/I/415cU5Gk7aL.jpg",
      price: 90500,
    },
    {
      id: 10,
      title: "Traveling suitcase",
      description: "Spectacular pet carrier bag, made of anti-fluid fabric, exclusive print and ventilation mesh for pets on both sides.",
      urlImage: "https://http2.mlstatic.com/D_NQ_NP_843288-MCO45320638745_032021-O.jpg",
      price: 120000,
    }
  ];

  useEffect(() => {
    // fetch(
    //   "https://inspiring-wilson-c9c78d.netlify.app/.netlify/functions/server/api/productos/" +
    //     id
    // )
    // fetch("http://localhost:3000/api/productos/" + id)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setproductoDetalle(data);
    //   });
    const position = productosData.filter((producto) => producto.id === parseInt(id));
    setproductoDetalle(position[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <React.Fragment>
      <Navbar />
      <div className="contenedor">
        <div className="contenedor-imagen">
          {productoDetalle.urlImage != null ? (
            <div
              className="contenedor-imagen-img"
              style={{ backgroundImage: `url(${productoDetalle.urlImage})` }}
            ></div>
          ) : (
            <div
              className="contenedor-imagen-img"
              style={{
                backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU")`,
              }}
            ></div>
          )}
        </div>
        <div>
          <div className="contenedor-titulo">
            <p>{productoDetalle.title}</p>
          </div>
          <hr />
          <div className="contenedor-descripcion">
            <p>{productoDetalle.description}</p>
          </div>
          <div className="contenedor-precio">
            <p>$ {productoDetalle.price}</p>
          </div>
          <div className="contenedor-botones">
            {session.isSignedIn ? (
              <div className="contenedor-botones-comprar">
                <NavLink
                  to="/articulos"
                  activeClassName="active"
                  className="contenedor-botones-comprar-button"
                  onClick={() => {
                    agregarCarrito(productoDetalle);
                  }}
                >
                  Buy
                </NavLink>
              </div>
            ) : (
              <React.Fragment>
                <div className="contenedor-botones-login">
                  <NavLink
                    to="/login"
                    activeClassName="active"
                    className="contenedor-botones-login-button"
                  >
                    Sign in
                  </NavLink>
                </div>
                <div className="contenedor-botones-registro">
                  <NavLink
                    to="/login"
                    activeClassName="active"
                    className="contenedor-botones-registro-button"
                  >
                    Sign up
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
