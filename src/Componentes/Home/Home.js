import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";
import Recomendados from "./Recomendados/Recomendados";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Listado_articulos from "./Listado_articulos/Listado_articulos";
import Articulo from "./Articulo/Articulo";

function Home(props) {
  return (
    <div>
      <Navbar />

      <div id="home">
        <Slider  mostrar={true} />
        <div className="center">
          <section id="content">
            <h2 className="subheader">Artículos Recomendados</h2>
            <Recomendados />
          </section>
          {/* <Sidebar /> */}
        </div>
        {/* <div className="center">
          <section id="content2">
            <h2 className="subheader">Todos los Artículos</h2>
            <Listado_articulos />
          </section>
        </div> */}
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}
export default Home;
