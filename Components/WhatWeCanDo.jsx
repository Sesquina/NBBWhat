import "../Styles/whatwecando.css";
import { useState } from "react";
import ApexChart from "../Components/ApexChart";
import useFitText from "use-fit-text";
import styled from "styled-components";
import { BsFillPeopleFill} from "react-icons/bs";
import { GiPalmTree } from "react-icons/gi";
import {FaMoneyCheckAlt, FaDonate, FaStore} from "react-icons/fa";
import Popup from "../Components/Popup";



const Title = styled.h1`
  background-color: #002b49;
  font-size: 20px;
  color: white;
  text-align: center;
  display:inline 
`;

const Para = styled.h2`
  color: #002b49;
  font-size: 15px;
  text-align: center;
`;

const StyledDiv = styled.div`
  margin-top: 10%;
  background-color: #fff; 
  justify-content: center;
  align-items: center;
`;
const Line = styled.hr`
  color: #002b49;
  margin-left: 20vw;
  border: border: 4px solid #002b49;
`;

function WhatWeCanDo() {
  const { fontSize, ref } = useFitText();
  return (
    <div style={{ fontFamily: "AvenirNext" }}>
      <div class="container">
        <div class="text">
          <StyledDiv>
           
            
          </StyledDiv>
        </div>

        <div class="lineicon">

          <div class="block">

         <Popup />
          <button><BsFillPeopleFill color="#AE7A67" size={70}/></button>
          <button><FaMoneyCheckAlt color="#AE7A67"size={70}/></button>
          <button><GiPalmTree color="#AE7A67"size={70}/></button>
          <button><FaDonate color="#AE7A67"size={70}/></button>
          <button><FaStore color="#AE7A67"size={70}/></button>
           
          </div>
          
        </div>
        
        <div class="CapitalGroup">
      <Para>Capital Groups's Compensation Model </Para>
          <ApexChart />
        </div>
      </div>
    </div>
  );
}

export default WhatWeCanDo;
