import React from "react";
import "./ourwork.css";
import { ourwork as Ourworkdata } from "./ourworkdata";

export default function ourwork() {
  return (
    <>
      <h1 className="heading-ourworks">Recent House for sale</h1>
      <div className="ourwork-section">
        {Ourworkdata.map((val) => {
          return (
            <div className="ourwork-card">
              <div className="image-wrapper">
                <img src={val.image} alt="our work img" />
              </div>
              <div className="ourwork_title">{val.title}</div>
              <button>Contact Us</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
