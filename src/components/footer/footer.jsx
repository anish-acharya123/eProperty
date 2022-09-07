import React from "react";
import "./footer.css";
import github from "../../Assets/github_logo.svg";
import facebook from "../../Assets/icons/facebook.svg";
import instagram from "../../Assets/icons/instagram.svg";
import twitter from "../../Assets/icons/twitter.svg";
import logo from "../../Assets/logo.svg";

export default function footer() {
  return (
    <div className="footer-section">
      <div className="footer-first">
        <div className="first">
          <div className="footer-text1">
            Social Links <hr />
          </div>
          <div className="icon">
            <div>
              <a href="https://github.com" target="_blank" alt="footer">
                <img src={github} alt="error" />
              </a>{" "}
              <br />
              <div className="first-icon-text">Github</div>
            </div>
            <div>
              <a href="https://facebook.com" target={"_blank"}>
                {" "}
                <img src={facebook} alt="error" />{" "}
              </a>
              <br />
              <div className="first-icon-text">facebook</div>
            </div>
            <div>
              <a href="https://instagram.com" target={"_blank"}>
                {" "}
                <img src={instagram} alt="error" />{" "}
              </a>
              <div className="first-icon-text">instagram</div>
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
        <div className="second">
          <img src={logo} alt="" /> <br />{" "}
          <div className="second-icon-text">COPYRIGHT ANISH ACHARYA 2022</div>
        </div>
      </div>
      <div className="footer-second">
        <div className="third">
          {" "}
          <div className="footer-text2">Subscribe for daily updates</div>
          <div className="input-field">
            Email <br />
            <input type="email" />
          </div>
          <button> Subscribe</button>
        </div>
        <div className="fourth">
          <div className="fourth-first">
            <div className="fourth-second">
              <div className="fourth-third"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
