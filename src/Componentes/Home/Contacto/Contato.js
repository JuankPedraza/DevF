import React from "react";

function Contacto() {
  return (
    <section id="contact">
      <h3>Contáctanos</h3>
      <p class="leading">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        explicabo animi vero tempore quod necessitatibus alias, enim
        perspiciatis magnam quis autem error, nihil quisquam? Totam ut ipsam
        nesciunt tempore facere!
      </p>
      <form>
        <input type="text" placeholder="Nombres" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensaje"></textarea>
        <button class="button">Enviar</button>
      </form>
    </section>
  );
}
export default Contacto;
