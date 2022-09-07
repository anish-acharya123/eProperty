import React from "react";
import "../about/about.css";
import Card from "../Card";
import articles from "../Data";
import Footer from "../footer/footer";

export default function aboutUs() {
  return (
    <>
      <div className="about">
        <div className="about-section">
          <div className="main">
            <div className="main-first">
              <div className="first-text1">
                <h1>
                  We are an iso certified <br /> company,establish in 1950.{" "}
                  <br /> And making people Happy since.
                </h1>
              </div>
              <div className="first-text2">Our CEO'S</div>
              <div className="first-text3">
                {" "}
                Ashish Acharya <span>Anish Acharya</span>{" "}
              </div>
              <div className="first-text4">
                <span> What are you waiting for!</span>
              </div>
              <div className="first-btn">
                <button className="button btn">Connect with us</button>
              </div>
            </div>
            <div className="main-second">
              <div className="second-text1">
                <h1>Reasons to work with us</h1>
              </div>

              <div className="second-card">
                {articles.map((element) => {
                  return (
                    <div className="card" key={element.id}>
                      <Card
                        Id={element.id}
                        Title={element.title}
                        Text={element.text}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
