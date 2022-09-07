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

function App() {
  const [loader, setloader] = useState(true);

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
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/work" element={<Ourwork />}></Route>
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
