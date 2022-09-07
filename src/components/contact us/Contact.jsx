import React from "react";
import "./contact.css";
import github from "/Ashish Project/anish/src/Assets/icons/github.svg";
import facebook from "/Ashish Project/anish/src/Assets/icons/facebook.svg";
import instagram from "/Ashish Project/anish/src/Assets/icons/instagram.svg";
import twitter from "/Ashish Project/anish/src/Assets/icons/twitter.svg";

export default function Contact() {
  return (
    <>
      <div className="contact-section">
        <div className="contact-div">
          <div className="image"></div>
          <div className="contact">
            <div className="name">
              Name <br />
              <input type="text" />
            </div>
            <div className="email">
              Email <br />
              <input type="email" />
            </div>
            <div className="message">
              Message <br />
              <input type="text" />
            </div>
            <button>Contact with us</button>
          </div>
          <div className="social-media">
            <div className="contact-text1">
              Social Links 
            </div>
            <div className="icon1">
              <div>
                <a href="https://github.com" target={"_blank"}>
                  <img src={github} alt="error" />
                </a>{" "}
                <br />
                <div className="contact-icon-text">Github</div>
              </div>
              <div>
                <a href="https://facebook.com" target={"_blank"}>
                  {" "}
                  <img src={facebook} alt="error" />{" "}
                </a>
                <br />
                <div className="contact-icon-text">facebook</div>
              </div>
              <div>
                <a href="https://instagram.com" target={"_blank"}>
                  {" "}
                  <img src={instagram} alt="error" />{" "}
                </a>
                <div className="contact-icon-text">instagram</div>
              </div>
              <div>
                <a href="https://twitter.com" target={"_blank"}>
                  {" "}
                  <img src={twitter} alt="error" />{" "}
                </a>
                <br /> <div className="first-icon-text">twitter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
