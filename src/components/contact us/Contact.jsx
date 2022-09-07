import React from "react";
import "./contact.css";
import github from "../../Assets/github_logo.svg";
import facebook from "../../Assets/icons/facebook.svg";
import instagram from "../../Assets/icons/instagram.svg";
import twitter from "../../Assets/icons/twitter.svg";

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
            <div className="contact-text1">Social Links</div>
            <div className="icon1">
              <div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="footer"
                >
                  <img src={github} alt="error" className="contact-img" />
                </a>
                <br />
                <div className="contact-icon-text">Github</div>
              </div>
              <div>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="footer"
                >
                  <img src={facebook} alt="error" className="contact-img" />
                </a>
                <br />
                <div className="contact-icon-text">facebook</div>
              </div>
              <div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="footer"
                >
                  <img src={instagram} alt="error" className="contact-img" />
                </a>
                <div className="contact-icon-text">instagram</div>
              </div>
              <div>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="footer"
                >
                  <img src={twitter} alt="error" className="contact-img" />
                </a>
                <br />{" "}
                <div className="first-icon-text contact-icon-text">twitter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
