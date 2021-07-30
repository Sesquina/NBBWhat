import "../Styles/whatwecando.css";
import { useState } from "react";
import ApexChart from "./ApexChart";
import IconMessage from "./IconMessage";
import Arrow from "./Arrow";


function WhatWeCanDo() {
const [selectedIcon, setSelectedIcon]= useState("rings")


  return (
    <div class="container" style={{ fontFamily: "AvenirNext" }}>
      <IconMessage 
      selectedIcon= {selectedIcon}/> 
      <Arrow 
      setSelectedIcon={setSelectedIcon}/>
      <ApexChart />
    </div>
  );
}

export default WhatWeCanDo;
