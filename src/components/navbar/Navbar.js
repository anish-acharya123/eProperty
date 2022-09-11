import { React } from "react";
import logo from "../../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <img id="img" src={logo} alt="error" />
          </Link>

          <ul className="nav-ul">
            <li className="li">
              <Link className="list" to="/" onClick={topFunction}>
                <div className="home1">
                  <FontAwesomeIcon icon={faHouse} />
                  <h3> HOME </h3>
                </div>
              </Link>
            </li>
            <li className="li">
              <Link className="list" to="/work" onClick={topFunction}>
                <div className="home2">
                  <FontAwesomeIcon icon={faBookOpen} />
                  <h3> OUR WORK </h3>
                </div>
              </Link>
            </li>
            <li className="li">
              <Link className="list" to="/about" onClick={topFunction}>
                <div className="home3">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <h3>ABOUT US </h3>
                </div>
              </Link>
            </li>
            <li className="li">
              <Link className="list" to="/contact" onClick={topFunction}>
                <div className="home4">
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
