import React from "react";
import logo from "../../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="main-div">
        <div className="nav-bar">
          <Link  to="/">
            <img id="img" src={logo} alt="error" />
          </Link>

          <ul className="nav-ul">
            <li>
              <Link className="list" to="/">
                <div className="nav-text-icon">

                <FontAwesomeIcon icon={faHouse} />
                <h3> HOME </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link className="list" to="/work">
              <div className="nav-text-icon">
                <FontAwesomeIcon icon={faBookOpen} />
                <h3> OUR WORK </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link className="list" to="/about">
              <div className="nav-text-icon">
                <FontAwesomeIcon icon={faBriefcase} />
                <h3>ABOUT US </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link className="list" to="/contact">
              <div className="nav-text-icon">
                <FontAwesomeIcon icon={faPhone} />
                <h3>CONTACT US </h3>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
