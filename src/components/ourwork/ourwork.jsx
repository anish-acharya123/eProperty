import React from "react";
import "./ourwork.css";
import Ourwoekdata from "./ourworkdata";

export default function ourwork() {
  return (
    <>
      <div className="ourwork-section">
       
          <div className="container2" id="root">
            {Ourwoekdata.map((val) => {
              return (
                <div class="ourwork-card">
                  <div className="image-wrapper">

                  <img src={val.image} alt="" /> 
                  </div>
                  <div>{val.title}</div>
                  <button>Contact Us</button>
                </div>
              );
            })}
          </div>
        
      </div>
    </>
  );
}

