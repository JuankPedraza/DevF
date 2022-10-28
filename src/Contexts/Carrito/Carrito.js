import React, { useState } from "react";
import swal from "sweetalert";

const CarritoContext = React.createContext(null);

function Carrito({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito((prevState) => [...prevState, producto]);
    swal({
      title: "Added!",
      text: "Product added successfully",
      icon: "success",
    });
  };

  const quitarCarrito = (productoEleminado) => {
    setCarrito((prevState) =>
      prevState.filter((producto) => producto._id !== productoEleminado._id)
    );
    swal({
      title: "Removed!",
      text: "Product removed successfully",
      icon: "success",
    });
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarCarrito,
        quitarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export default Carrito;
export { CarritoContext };
