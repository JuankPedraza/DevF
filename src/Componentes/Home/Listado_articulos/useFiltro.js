import { useEffect, useState } from "react";

function useFiltro(productos = [], terminoBusqueda) {
  const [productoFiltrado, setproductoFiltrado] = useState([]);
  useEffect(() => {
    if (productos.length != 0) {
      const filtrados = productos.filter((producto) =>
        producto.product_name.includes(terminoBusqueda)
      );

      setproductoFiltrado(filtrados);
    }
  }, [terminoBusqueda, productos]);

  return { productoFiltrado };
}

export default useFiltro;
