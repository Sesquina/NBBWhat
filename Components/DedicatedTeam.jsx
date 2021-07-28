
import "../Styles/dedicated-team.css";

import Ring from "../Assets/Images/ring.svg";
import Family from "../Assets/Images/family.svg";
import Money from "../Assets/Images/money.svg";
import Retire from "../Assets/Images/retire.svg";
import Donate from "../Assets/Images/donate.svg";
import Store from "../Assets/Images/store.svg";
import ApexChart from "../Components/ApexChart";
import Marital from "../Assets/Images/maritaltransitions.png";

import { useState, useEffect } from "react";
import * as advisors from "../Static/advisors.jsx";
import * as nbbpdf from "../Static/nbbpdf.jsx";




function DedicatedTeam() {
  const team = [
    advisors.maritalTransitions,
    advisors.passingWealth,
    advisors.executiveCompensation,
    advisors.nonProfits,
    advisors.suddenWealth,
    advisors.safeRetire
  ];




  const [pageInit, setPageInit] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedAdvisorBioState, setSelectedAdvisorBioState] = useState(0);
  const [advisorSelectedContact, setAdvisorSelectedContact] = useState(false);
  const [advisorSelectedDesc, setAdvisorSelectedDesc] = useState(false);
  const [advisorSelectedStat, setAdvisorSelectedStat] = useState(false);
  const [advisorSelectedBox, setAdvisorSelectedBox] = useState(false);
  const [advisorSelectedBody, setAdvisorSelectedBody] = useState(false);

  const [showAdvisorDetailView, setShowAdvisorDetailView] = useState(false);

  useEffect(() => {
    if (!pageInit) {
      setPageInit(true);
      setTimeout(function() {
        setAdvisorSelectedBox(true);
      }, 1000);
      setTimeout(function() {
        setAdvisorSelectedContact(true);
      }, 4000);
      setTimeout(function() {
        setAdvisorSelectedDesc(true);
      }, 2500);
      setTimeout(function() {
        setAdvisorSelectedStat(true);
      }, 1000);
      setAdvisorSelectedBody(true);
    }
  }, []);



  function advisorPosition(index) {
    if (index == selectedIndex) {
      return { left: "13%", top: "50%" };
    } else if (selectedIndex < index) {
      return {
        left: ((index / team.length) * 100).toString() + "%",
        top: "10%"
      };
    } else {
      return {
        left: (((index + 1) / team.length) * 100).toString() + "%",
        top: "10%"
      };
    }
  }

  function handleSelectAdvisor(index) {
    setSelectedAdvisorBioState(0);
    setSelectedIndex(index);

    setAdvisorSelectedBox(false);
    setAdvisorSelectedContact(false);
    setAdvisorSelectedDesc(false);
    setAdvisorSelectedStat(false);
    setAdvisorSelectedBody(false);

    setTimeout(function() {
      setAdvisorSelectedBox(true);
    }, 0);
    setTimeout(function() {
      setAdvisorSelectedContact(true);
    }, 0);
    setTimeout(function() {
      setAdvisorSelectedDesc(true);
    }, 0);
    setTimeout(function() {
      setAdvisorSelectedBody(true);
    }, 0);
  }

  function renderAdvisorImage(index) {
    const advisor = team[index];

    if (advisor.firstName == "Marital") {
      return (
        <img
          src={Ring}
          className={
            index === selectedIndex ? "advisor-img-selected" : "advisor-img"
          }
        />
      );
    } else if (advisor.firstName == "Passing Wealth") {
      return (
        <img
          src={Family}
          className={
            index === selectedIndex ? "advisor-img-selected" : "advisor-img"
          }
        />
      );
    } else if (advisor.firstName == "Managing The Complexities") {
      return (
        <img
          src={Store}
          className={
            index === selectedIndex ? "advisor-img-selected" : "advisor-img"
          }
        />
      );
    } else if (advisor.firstName == "Navigating") {
      return (
        <img
          src={Money}
          className={
            index === selectedIndex ? "advisor-img-selected" : "advisor-img"
          }
        />
      );
    } else if (advisor.firstName == "Helping Nonprofits") {
      return (
        <img
          src={Donate}
          className={
            index === selectedIndex ? "advisor-img-selected" : "advisor-img"
          }
        />
      );
    } else if (advisor.firstName == "Building A Financially") {
      return (
        <img
          src={Retire}
          className={
            index === selectedIndex ? "advisor-img-selected" : "advisor-img"
          }
        />
      );
    }
  }

  return (
    <div>
      <div className="section-view-parent-container">
        <div className="section-view-container">
          <div className="top-section-container">
            <div className="advisors-heading">
              {/* Your team of experienced advisors ready to help you achieve your
              goals. */}
            </div>
            <div>
              {team.map((advisor, index) => (
                <div
                  className="advisor-container"
                  style={advisorPosition(index)}
                  onClick={() => handleSelectAdvisor(index)}
                >
                  {renderAdvisorImage(index)}
                  {index === selectedIndex && (
                    <div className="advisor-img-box-container"></div>
                  )}
                  <div
                    className="advisor-name-title-container"
                    style={{
                      visibility: index === selectedIndex ? "hidden" : "visible"
                    }}
                  >
                    <div className="advisor-name">
                      {advisor.firstName + " " + advisor.lastName}
                    </div>
                  
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          <div className="bottom-section-container">
       
            <div
              className="bottom-section-detail-container"
              style={{
                bottom: advisorSelectedBody ? "0" : "-55vh",
                transition: advisorSelectedBody ? "linear 1s" : "linear 0s"
              }}
            >
            
              <div className="selected-advisor-details-container">
                <div className="selected-advisor-name-title-container">
                  <div className="selected-advisor-name">
                    {team[selectedIndex].firstName +
                      " " +
                      team[selectedIndex].lastName}
                  </div>
                  <div className="selected-advisor-name-title-divider" />
                  <div className="selected-advisor-title-1">
                    {team[selectedIndex].title1}
                    {team[selectedIndex].title2 !== undefined ? "," : ""}
                  </div>
                  <div className="selected-advisor-title-2">
                    {team[selectedIndex].title2}
                  </div>
                </div>
                <div className="selected-advisor-role-desc">
                  {team[selectedIndex].pdf}
                </div>
                <div className="selected-advisor-bio-container">
                  <div
                    className="selected-advisor-bio-state-1-container"
                    style={{
                      opacity: selectedAdvisorBioState === 0 ? "1" : "0",
                      transition: "linear 0.5s",
                      zIndex: selectedAdvisorBioState === 0 ? "5" : "4"
                    }}
                  >
               
            
                  </div>
            
                </div>
              </div>
            </div>


          </div>


        </div>

   
      </div>
    </div>
  );
}

export default DedicatedTeam;


