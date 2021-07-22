import React from "react";
import Navbar from "./Navbar/Navbar";
import Recomendados from "./Recomendados/Recomendados";
import Footer from "../Footer/Footer";
import Logo from "../../assets/logo.png";
import Tiendas from "./Tiendas/Tiendas";
import Contacto from "./Contacto/Contato";
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div>
      <Navbar />
      <section id="welcome" class="grid">
        <div class="welcome-text">
          <h2>
            Variedad
            <br />& Todo para tu Hogar
          </h2>
          <p class="leading">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            beatae nam quam quia ab reiciendis, inventore unde labore deserunt?
            Adipisci sint a vitae consequatur! Assumenda id reprehenderit est
            doloremque esse.
          </p>
          <Link className="button" to={'/articulos'} >Ver productos</Link>
        </div>
        <div class="welcome-img">
          <img src={Logo} alt="Logo ecommerce" />
        </div>
      </section>
      <section id="portfolio">
        <h3>Articulos Recomendados</h3>
        <Recomendados />
      </section>
      <Tiendas />
      <Contacto />
      <Footer />
    </div>
  );
}
export default Home;
