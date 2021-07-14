import "./App.css";
import Router from "./Router";
import AuthContext from "./Contexts/Auth/Auth";


function App() {
  return (
    <AuthContext>
      <Router />
    </AuthContext>
  );
}

export default App;
