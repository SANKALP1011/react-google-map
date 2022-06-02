import React from "react";
import Map from "./Componenst/Map";
import { BlueButton } from "./Componenst/BlueButton";

function App() {
  const h = () =>{
    console.log("clllll")
  }
  return (
    <div className="App">
      <Map/>
      <BlueButton handler={h} label={<h3>hhh</h3>}/>
    </div>
  );
}

export default App;
