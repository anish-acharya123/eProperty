import { React } from "react";
import logo from "../../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

// import "./Navbar.css";
import { NavLink } from "react-router-dom";
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
        <NavBarDiv>
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
        </NavBarDiv>
      </div>
    </>
  );
}

const NavBarDiv = styled.div`
  font-weight: bold;
  padding-top: 1.7rem;
  width: 100%;
  height: 80px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: #162430;

  #img {
    height: 60px;
    margin-left: 12rem;
    cursor: pointer;
  }

  .nav-ul {
    height: 80px;
    margin-right: 2rem;
    list-style: none;
    display: flex;
    align-items: center;
    text-indent: 5rem;
  }

  .list {
    color: white;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease;
  }

  .list:hover {
    color: rgb(199, 199, 199);
  }

  .list svg {
    display: none;
  }

  .active-link {
    color: red;
  }

  .active h3 {
    color: #9fa5eb;
  }

  @media (max-width: 1030px) {
    #img {
      margin-left: 7rem;
    }
  }
  @media (max-width: 925px) {
    .nav-ul {
      text-indent: 2rem;
    }
  }

  @media (max-width: 700px) {
    padding: 0;

    #img {
      height: 2.5rem;
      margin-left: 2rem;
      cursor: pointer;
    }

    .nav-ul {
      height: 5rem;
      position: fixed;
      z-index: 99;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #162430;
      margin: 0rem;
      text-indent: 0;
      display: flex;
      justify-content: space-around;
      border-top: 0.5px solid rgba(255, 250, 250, 0.2);
    }

    .list h3 {
      font-size: 0.6rem;
      text-align: right;
      line-height: 1.5rem;
    }

    .list svg {
      display: inline-block;
      font-size: 1.3rem;
      width: 100%;
    }

    .nav-ul {
      text-indent: 0;
    }

    .active h3 {
      color: white;
    }

    .active .home {
      // border-bottom: 1px solid red;
      border-bottom: 1px solid #9fa5eb;
      transition: all ease-in-out .2s;
    }
  }

  @media (max-width: 405px) {
    .list {
      font-size: 12px;
    }

    .nav-ul {
      text-indent: 0;
    }
  }
`;
