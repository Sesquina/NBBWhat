import React from "react";
import "../Styles/arrow.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiPalmTree, GiLinkedRings } from "react-icons/gi";
import { FaMoneyCheckAlt, FaDonate, FaStore } from "react-icons/fa";


import { GoArrowRight } from "react-icons/go";


function Arrow(props) {
    const handleClick = (messageKey) => () => props.setSelectedIcon(messageKey);
    return (
        <div className="icon-arrow">
            <div className="arrow">
                <div className="arrow-line" />
                <div className="arrow-icon">
                    <GoArrowRight />
                </div>
            </div>
            <div className="icons">
                <GiLinkedRings onClick={handleClick("rings")} />
                <BsFillPeopleFill onClick={handleClick("sudden")} />
                <FaMoneyCheckAlt />
                <GiPalmTree />
                <FaDonate />
                <FaStore />


            </div>
        </div>


    )
}


export default Arrow 