import "../Styles/main.css";
import Header from "./Header";
import WhoWeAre from "../Components/WhoWeAre";
import WhatWeCanDo from "../Components/WhatWeCanDo.jsx";
import DedicatedTeam from "../Components/DedicatedTeam.jsx";
import { useState } from "react";

function Main() {
  const sectionTitles = [
    "Who We Are",
    "What We Can Do For You",
    "Your Dedicated Team",
    "Our Investment Results"
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(3);

  return (
    <div style={{ fontFamily: "AvenirNext" }} className="main">
      <Header
        currentSectionIndex={currentSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
      />
  
      {currentSectionIndex === 0 && <WhoWeAre />}
      {currentSectionIndex === 1 && <WhatWeCanDo />}
      {currentSectionIndex === 2 && <DedicatedTeam />}
    </div>
  );
}

export default Main;
