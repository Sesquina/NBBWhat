import React from "react";
import "../Styles/iconmessage.css";
import messages from "../Static/iconmessage.json";


function IconMessage(props) {

    const message = messages[props.selectedIcon]

    return (
        <div className="icon-message">
            <div className="title">{message.title}</div>
            <div className="message">{message.message}</div>
        </div>

    )
}


export default IconMessage