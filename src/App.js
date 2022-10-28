import "./App.css";
import Router from "./Router";
import AuthContext from "./Contexts/Auth/Auth";
import CarritoContextComponent from "./Contexts/Carrito/Carrito";

function App() {
  return (
    <AuthContext>
      <CarritoContextComponent>
        <Router />
      </CarritoContextComponent>
    </AuthContext>
  );
}

export default App;
