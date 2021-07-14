import React from "react";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";
import Recomendados from "./Recomendados/Recomendados";
import Footer from "../Footer/Footer";

function Home(props) {
  return (
    <div>
      <Navbar />

      <div id="home">
        <Slider mostrar={true} />
        <div className="center">
          <section id="content">
            <h2 className="subheader">Artículos Recomendados</h2>
            <Recomendados />
          </section>
        </div>
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}
export default Home;
