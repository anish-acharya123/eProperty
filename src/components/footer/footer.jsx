import React from "react";
import github from "../../Assets/github_logo.svg";
import facebook from "../../Assets/facebook_logo.svg";
import instagram from "../../Assets/instagram_logo.svg";
import twitter from "../../Assets/twitter_logo.svg";
import logo from "../../Assets/logo.svg";

import { FooterSection } from "./FooterStyled";

export default function footer() {
  return (
    <FooterSection>
      <div className="footer-first">
        <div className="first">
          <div className="footer-text1">
            Social Links <hr />
          </div>
          <div className="icon">
            <div>
              <a
                href="https://github.com/anish-acharya123"
                target="_blank"
                rel="noopener noreferrer"
                alt="footer"
              >
                <img src={github} alt="error" />
              </a>
              <br />
              <div className="first-icon-text">Github</div>
            </div>
            <div>
              <a
                href="https://www.facebook.com/anish.acharya.79230"
                target="_blank"
                rel="noopener noreferrer"
                alt="footer"
              >
                {" "}
                <img src={facebook} alt="error" />{" "}
              </a>
              <br />
              <div className="first-icon-text">facebook</div>
            </div>
            <div>
              <a
                href="https://www.instagram.com/iamanish_acharya/"
                target="_blank"
                rel="noopener noreferrer"
                alt="footer"
              >
                {" "}
                <img src={instagram} alt="error" />{" "}
              </a>
              <div className="first-icon-text">instagram</div>
            </div>
            <div>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                alt="footer"
              >
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
    </FooterSection>
  );
}
