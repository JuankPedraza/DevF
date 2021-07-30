import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import Articulo from "./Componentes/Home/Articulo/Articulo";
import Login from "./Componentes/Authentication/Login/Login";
import Register from "./Componentes/Authentication/Register/Register";
import Listado_articulos from "./Componentes/Home/Listado_articulos/Listado_articulos";
import Carrito_compras from "./Componentes/Home/Carrito_compras/Carrito_compras";
import Carrito_compras2 from "./Componentes/Home/Carrito_compras/Carrito_compras2";
import Carrito_compras3 from "./Componentes/Home/Carrito_compras/Carrito_compras3";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/articulos/articulo/:id" component={Articulo} />
        <Route exact path="/articulos" component={Listado_articulos} />
        <Route exact path="/carrito" component={Carrito_compras} />
        <Route exact path="/carrito-paso2" component={Carrito_compras2} />
        <Route exact path="/carrito-resumen" component={Carrito_compras3} />
        {/* <Route component={Error} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
