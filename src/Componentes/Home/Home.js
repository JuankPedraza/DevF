import React from "react";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";
import Sidebar from "./Sidebar/Sidebar";

function Home(props) {
  return (
    <React.Fragment>
      <Navbar home={"home"} />
      <Slider />
      <Sidebar />
    </React.Fragment>
  );
}
export default Home;
