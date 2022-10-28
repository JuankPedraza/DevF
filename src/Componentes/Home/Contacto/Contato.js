import React from "react";
import './Contacto.css';
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

function Contacto() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="contenedor-contact">
        <div className="contenedor-uno">
          <h1>A Cat's Land experience</h1>
          <p>
            We market and distribute high-quality medicines, food and agricultural supplies, satisfying the needs of the countryside, animals and animal health for the well-being of man.</p>
        </div>
        <div className="main">
          <div className="contenedor-dos">
            <div>
              <h1>40 years of history</h1>
              <p>
                We market and distribute high-quality medicines, food and agricultural supplies, satisfying the needs of the countryside, animals and animal health for the well-being of man.</p>
              <button>Watch video</button>
            </div>
            <div>
              <img src="https://c8.alamy.com/zoomses/9/e683999eb2b24f3187ed64a0f3add1bc/2hpnjyp.jpg" alt="" />
            </div>
          </div>
          <div className="contenedor-tres">
            <div>
              <img src="https://www.sacyr.com/documents/63048160/63076224/etica+empresarial.jpg/9e4b6724-db46-3291-4053-259da54601a7?t=1606474566683" alt=""/>
            </div>
            <div className="social">
              <h1>Social responsability</h1>
              <p>We market and distribute high-quality medicines, food and agricultural supplies, satisfying the needs of the countryside, animals and animal health for the well-being of man.</p>
              <button>Watch video</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Contacto;
