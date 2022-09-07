// import logo from './logo.svg';
import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Loader from "./components/loader/loader";
import Contact from "./components/contact us/Contact";
import Footer from "./components/footer/footer";
import Ourwork from "./components/ourwork/ourwork";
import "aos/dist/aos.css";
// import Aos from "aos";

function App() {
  const [loader, setloader] = useState(true);
  // useEffect(() => {
  //   Aos.init({ easing: "ease", duration: 700 });
  // });
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
  });

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Router>
          <div className="Hero-section">
            <div className="Home-section">
              <div className="Nav-section">
                <Navbar />
              </div>

              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/work" element={<Ourwork />}></Route>
              </Routes>

              <div className="footer">
                <Footer/>
              </div>
            </div>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
