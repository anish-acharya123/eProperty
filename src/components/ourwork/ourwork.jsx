import React from "react";
import "./ourwork.css";
import { ourwork as Ourworkdata } from "./ourworkdata";
import styled from "styled-components";

export default function ourwork() {
  return (
    <>
      <h1 className="heading-ourworks">Houses for sale</h1>
      <OurworkSection>
        {Ourworkdata.map((val) => {
          return (
            <div className="ourwork-card">
              <div className="image-wrapper">
                <img src={val.image} alt="our work img" />
              </div>
              <div className="ourwork_title">{val.title}</div>
              <button>Contact Us</button>
            </div>
          );
        })}
      </OurworkSection>
    </>
  );
}

const OurworkSection = styled.div`
  height: 90vh;
  width: 1100px;
  margin: 0 auto;
  background-color: #162431;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 0rem 4rem 0rem;

  .ourwork-card {
    height: 17rem;
    width: 25%;
    box-shadow: 0px 0px 7px -2px rgba(255, 250, 250, 0.2);
    border: 0.5px solid rgba(238, 232, 232, 0.2);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem 0.5rem 2rem 0.5rem;
    transition: 0.3s ease-in-out;
    overflow: hidden;
  }

  .ourwork-card:hover img {
    scale: 1.1;
    box-shadow: 3px 4px 7px -2px rgba(255 250 250 / 20%);
  }

  .image-wrapper {
    height: 60%;
    width: 100%;
    overflow: hidden;
  }

  .ourwork-card img {
    height: 10rem;
    margin: 0 auto;
    width: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
  }

  .ourwork_title {
    font-size: 1rem;
    font-weight: 700;
  }

  .ourwork-card button {
    height: 2.2rem;
    width: 90%;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
  }

  .ourwork-card button:hover {
    background-color: rgb(197, 198, 199);
  }

  @media (max-width: 1100px) {
    width: 1000px;
  }

  @media (max-width: 1000px) {
    width: 900px;
  }

  @media (max-width: 700px) {
    width: 25rem;
    height: 320vh;
    flex-direction: column;

    .ourwork-card {
      height: 20rem;
      width: 85%;
    }

    .ourwork-card img {
      height: 13rem;
    }
  }

  @media (max-width: 400px) {
    width: 23rem;
  }

  @media (max-width: 350px) {
    width: 25rem;

    // .heading-ourworks {
    //   margin: 1rem 0;
    //   font-size: 2rem;
    //   width: 25rem;
    // }
  }

  @media (max-width: 376px) {
    height: 350vh;
  }
`;
