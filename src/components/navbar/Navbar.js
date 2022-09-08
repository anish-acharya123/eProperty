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
          <Link to="/">
            <img id="img" src={logo} alt="error" />
          </Link>

          <ul className="nav-ul">
            <li>
              <Link className="list" to="/">
                <h3> HOME </h3>
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
            <li>
              <Link className="list" to="/work">
                <h3> OUR WORK </h3>
                <FontAwesomeIcon icon={faBookOpen} />
              </Link>
            </li>
            <li>
              <Link className="list" to="/about">
                <h3>ABOUT US </h3>
                <FontAwesomeIcon icon={faBriefcase} />
              </Link>
            </li>
            <li>
              <Link className="list" to="/contact">
                <h3>CONTACT US </h3>
                <FontAwesomeIcon icon={faPhone} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
