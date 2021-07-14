import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth/Auth";
import './Slider.css';

function Slider(props) {
  const { user, session } = useContext(AuthContext);

  return (
    <header className="header-2">
      {props.mostrar === true && <div className="header-2-slider"></div>}
      {props.mostrar === false && <div></div>}
    </header>
  );
}
export default Slider;
