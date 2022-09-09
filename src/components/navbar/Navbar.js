import {React} from "react";
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

  const toFunction = ()=>{
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome,firefox, IE and Opera
  }

  return (
    <>
      <div className="main-div">
        <div className="nav-bar">
          <Link  to="/">
            <img id="img" src={logo} alt="error" />
          </Link>

          <ul className="nav-ul">
            <li>
              <Link className={`list`} to="/"  onClick={toFunction}>
                <div className={``}>

                <FontAwesomeIcon icon={faHouse}/>
                <h3> HOME </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link className="list" to="/work"  onClick={toFunction}>
              <div className={``}>
                <FontAwesomeIcon icon={faBookOpen} />
                <h3> OUR WORK </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link className="list" to="/about"  onClick={toFunction}>
              <div className={``}>
                <FontAwesomeIcon icon={faBriefcase} />
                <h3>ABOUT US </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link className="list" to="/contact"  onClick={toFunction}>
              <div className={``}>
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
