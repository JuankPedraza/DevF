import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import useEliminarCarrito from "./useEliminarCarrito";
import BarraProgreso from "./Barra_progreso/Barra_progreso";
import "./Carrito_compras2.css";

function Carrito_compras2() {
  const { carrito } = useContext(AuthContext);
  const { total } = useEliminarCarrito(carrito);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#058a7e";
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement(document.getElementById("modal"));

  var total2 = total.toString();
  let history = useHistory();

  function resumenClick() {
    history.push("/carrito-resumen");
  }

  const cambiaColorEf = function () {
    let botonEfectivo = document.getElementById("efectivo");
    let checkBoton = document.getElementById("check1");
    let compStyles = window.getComputedStyle(botonEfectivo);
    let valorBorder = compStyles.border;

    if (valorBorder === "2px solid rgba(45, 51, 50, 0.1)") {
      botonEfectivo.style.border = "2px solid rgb(5, 138, 126)";
      checkBoton.style.visibility = "visible";
      return;
    } else if (valorBorder === "2px solid rgb(5, 138, 126)") {
      botonEfectivo.style.border = "2px solid rgba(45, 51, 50, 0.1)";
      checkBoton.style.visibility = "hidden";
      return;
    }
  };

  const cambiaColorTc = function () {
    let botonTC = document.getElementById("tc");
    let checkBoton = document.getElementById("check2");
    let compStyles = window.getComputedStyle(botonTC);
    let valorBorder = compStyles.border;

    if (valorBorder === "2px solid rgba(45, 51, 50, 0.1)") {
      botonTC.style.border = "2px solid rgb(5, 138, 126)";
      checkBoton.style.visibility = "visible";
      return;
    } else if (valorBorder === "2px solid rgb(5, 138, 126)") {
      botonTC.style.border = "2px solid rgba(45, 51, 50, 0.1)";
      checkBoton.style.visibility = "hidden";
      return;
    }
  };

  const cambiaColorTd = function () {
    let botonTD = document.getElementById("td");
    let checkBoton = document.getElementById("check3");
    let compStyles = window.getComputedStyle(botonTD);
    let valorBorder = compStyles.border;

    if (valorBorder === "2px solid rgba(45, 51, 50, 0.1)") {
      botonTD.style.border = "2px solid rgb(5, 138, 126)";
      checkBoton.style.visibility = "visible";
      return;
    } else if (valorBorder === "2px solid rgb(5, 138, 126)") {
      botonTD.style.border = "2px solid rgba(45, 51, 50, 0.1)";
      checkBoton.style.visibility = "hidden";
      return;
    }
  };

  // const enviarEmail = function () {
  //   var resultadoCompra = {};
  //   for (var i = 0; i < carrito.length; i++) {
  //     resultadoCompra["Producto " + i] = carrito[i].product_name;
  //     resultadoCompra["Precio_producto " + i] = carrito[i].price;
  //   }
  //   resultadoCompra.Total = "$" + total;
  //   console.log(resultadoCompra);

  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       destinatario: user.email,
  //       mensaje: "Tu compra se ha realiazado correctamente",
  //     }),
  //   };
  //   fetch("https://inspiring-wilson-c9c78d.netlify.app/.netlify/functions/server/api/email", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => console.log(carrito));
  // };

  return (
    <React.Fragment>
      <Navbar />
      <div id="modal">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            Make your payments quickly and safely with
          </h2>
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "USD",
                        value: total2,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                // Capture the funds from the transaction
                return actions.order.capture().then(function (details) {
                  // Show a success message to your buyer
                  //alert("Transaction completed by " + details.payer.name.given_name);
                  resumenClick();
                });
              }}
            />
          </PayPalScriptProvider>
        </Modal>
      </div>
      <div className="contenedor-carrito">
        <BarraProgreso total='125000' progreso={2} />
        <div className="listado_medios">
          <p className="listado_medios-titulo">Payment</p>
          <p className="listado_medios-subtitulo">
            Select the means with which you will make the payment
          </p>
          <div className="contenedor-medios">
            <button
              className="contenedor-medios-pago"
              id="efectivo"
              onClick={cambiaColorEf}
            >
              <i className="fas fa-check" id="check1"></i>
              <i className="fas fa-money-bill-alt"></i>
              <p>Upon delivery</p>
            </button>
            <button
              className="contenedor-medios-pago"
              id="tc"
              onClick={cambiaColorTc}
            >
              <i className="fas fa-check" id="check2"></i>
              <i className="fab fa-cc-mastercard"></i>
              <p>Credit card</p>
            </button>
            <button
              className="contenedor-medios-pago"
              id="td"
              onClick={cambiaColorTd}
            >
              <i className="fas fa-check" id="check3"></i>
              <i className="fas fa-credit-card"></i>
              <p>Debit card</p>
            </button>
          </div>
          <div className="contenedor-carrito-paypal">
            <p>Or pay with</p>
            <button
              onClick={openModal}
              className="contenedor-carrito-paypal-btn"
            >
              <p>PayPal</p>
            </button>
          </div>

          <div className="contenedor-carrito-botones">
            <hr />
            <div className="contenedor-carrito-botones-contenedor">
              <NavLink
                to="/carrito"
                className="contenedor-carrito-botones-contenedor-volver"
              >
                RETURN
              </NavLink>
              <NavLink
                to="/carrito-resumen"
                className="contenedor-carrito-botones-contenedor-siguiente"
              // onClick={enviarEmail}
              >
                NEXT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Carrito_compras2;
