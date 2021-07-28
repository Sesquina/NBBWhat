import React from 'react';
import Popup from 'reactjs-popup';
import { GiLinkedRings } from "react-icons/gi";
import "../Styles/modal.css";
import marital from "../Assets/Images/maritaltransitions.png";

export default () => (
  <Popup
    trigger={<button className="button"> <GiLinkedRings color="#AE7A67" size={70}/> </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Navigating Marital Transitions </div>
        <div className="content">
          {' '}
          With your goals in mind, we can help you build your in-depth wealth strategy and regularly update it with you.
          <br />
          <img src={marital} alt="maritaltransitions" />
        </div>
        <div className="actions">
       
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </Popup>
);