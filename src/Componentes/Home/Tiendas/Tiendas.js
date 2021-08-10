import React from "react";

function Tiendas() {
  return (
    <section id="skills">
      <h3>Nuestras Tiendas</h3>
      <ul className="grid">
        <li>
          <img
            src="https://eltesoro.com.co/wp-content/uploads/2020/07/dollar-city-el-tesoro-fachada.png.jpg"
            alt="DollarCity"
          />
          <h4>DollarCity</h4>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2agd0h8sWAxGC0SmwqUlLivB5DQYFe8EdYA&usqp=CAU"
            alt="Dollarama"
          />
          <h4>Dollarama</h4>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61OxdH-mnhggw4oI09wfcqmd1UNXEvm8-1Q&usqp=CAU"
            alt="Ibisu"
          />
          <h4>Ibisu</h4>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kVAfdklX6_Gf4rBXg-ieBJKHBpsooZGqCw&usqp=CAU"
            alt="micasa"
          />
          <h4>Mi casa</h4>
        </li>
      </ul>
    </section>
  );
}
export default Tiendas;
