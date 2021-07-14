import React from "react";
import './Slider.css';

function Slider(props) {

  return (
    <header className="header-2">
      {props.mostrar === true && <div className="header-2-slider"></div>}
      {props.mostrar === false && <div></div>}
    </header>
  );
}
export default Slider;
