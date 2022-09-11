import { React } from "react";
import logo from "../../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
// import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Navbar() {
  // const [move, setMove] = useState();

  const topFunction = () => {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className="main-div">
        <div className="nav-bar">
          <NavLink to="/">
            <img id="img" src={logo} alt="error" />
          </NavLink>

          <ul className="nav-ul">
            <li className="li">
              <NavLink
                className="list"
                to="/"
                onClick={topFunction}
                activeClassName="active-link"
              >
                <div className="home">
                  <FontAwesomeIcon icon={faHouse} />
                  <h3> HOME </h3>
                </div>
              </NavLink>
            </li>
            <li className="li">
              <NavLink
                className="list"
                to="/work"
                onClick={topFunction}
                activeClassName="active-link"
              >
                <div className="home">
                  <FontAwesomeIcon icon={faBookOpen} />
                  <h3> OUR WORK </h3>
                </div>
              </NavLink>
            </li>
            <li className="li">
              <NavLink
                className="list"
                to="/about"
                onClick={topFunction}
                activeClassName="active-link"
              >
                <div className="home">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <h3>ABOUT US </h3>
                </div>
              </NavLink>
            </li>
            <li className="li">
              <NavLink
                className="list"
                to="/contact"
                onClick={topFunction}
                activeClassName="active-link"
              >
                <div className="home">
                  <FontAwesomeIcon icon={faPhone} />
                  <h3>CONTACT US </h3>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
