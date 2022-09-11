import styled from "styled-components";

export const FooterSection = styled.div`
  height: 36rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  .footer-first {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .first {
    background-color: #d5d4d5;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .footer-text1 {
    font-size: 2rem;
    font-weight: 700;
    margin-left: -15rem;
  }

  .footer-text1 hr {
    height: 0.2rem;
    width: 11rem;
    background-color: gray;
    margin-top: 0.2rem;
  }

  .icon {
    display: flex;
    flex-direction: row;
  }

  .icon img {
    height: 2rem;
    width: 2rem;
    margin: 3rem;
    cursor: pointer;
  }

  .first-icon-text {
    margin-left: 2.2rem;
    margin-top: -3rem;
    font-weight: 700;
  }

  .second {
    background-color: #162431;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
  }

  .second img {
    height: 10rem;
  }

  .second-icon-text {
    font-size: 0.8rem;
    font-weight: 700;
  }

  .footer-second {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .third {
    background-color: #162431;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
  }
  .footer-text2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: -10rem;
  }

  .input-field {
    font-size: 1.5rem;
    color: gray;
    margin: 2rem;
    margin-left: -9rem;
  }

  .input-field input {
    height: 2rem;
    width: 19rem;
    border: none;
    background-color: transparent;
    border-bottom: 0.3rem solid gray;
    outline: none;
    font-size: 1rem;
    color: white;
  }

  .third button {
    font-size: 1.2rem;
    background-color: #31454b;
    padding: 1rem 7rem;
    color: whitesmoke;
    cursor: pointer;
    margin-left: -10.5rem;
    border: none;
  }

  .third button:hover {
    background-color: #223339;
  }

  .fourth {
    background-color: #d5d4d5;
    height: 100%;
    width: 50%;
    overflow: hidden;
  }

  .fourth-first {
    height: 80%;
    width: 90%;
    float: right;
    margin-top: 3.5rem;
    background-color: #162431;
  }

  .fourth-second {
    height: 80%;
    width: 90%;
    float: right;
    margin-top: 3rem;
    background-color: #d5d4d5;
  }

  .fourth-third {
    height: 80%;
    width: 90%;
    float: right;
    margin-top: 3rem;
    background-color: #162431;
  }

  @media (max-width: 995px) {
    height: 28rem;

    .footer-text1 {
      font-size: 1.7rem;
      margin-left: -10rem;
    }
    .icon {
      margin-left: -2rem;
    }
    .icon img {
      height: 1.5rem;
      margin: 2rem 0rem 3rem 3rem;
    }

    .second img {
      height: 7rem;
    }

    .footer-text2 {
      font-size: 1.3rem;
      margin: 0 0 -2rem -5rem;
    }
    .input-field {
      margin-left: -1rem;
      font-size: 1.2rem;
    }

    .third button {
      margin: 0 0 1rem -2.5rem;
    }
  }

  @media (max-width: 700px) {
    height: 48rem;
    overflow: hidden;

    .footer-first {
      flex-direction: column-reverse;
    }

    .first {
      width: 92%;
      padding: 2rem;
      height: 15rem;
    }

    .footer-text1 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-left: -3rem;
      text-align: center;
    }

    .first-icon-text {
      margin-left: 0rem;
      margin-top: -3rem;
      font-weight: 600;
    }

    .footer-text1 hr {
      height: 0.15rem;
      width: 8rem;
    }

    .icon {
      width: 100%;
      margin-right: 1rem;
      justify-content: space-around;
    }

    .icon img {
      height: 1.5rem;
      margin: 3rem 0.7rem;
    }

    .second {
      width: 96.3%;
      height: 20rem;
      align-items: flex-start;
      padding: 0 1rem;
    }

    .second img {
      height: 4rem;
    }

    .second-icon-text {
      font-size: 0.7rem;
      font-weight: 600;
      color: #cac5c5;
      letter-spacing: 2px;
    }

    .third {
      width: 100%;
      height: 20rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer-text2 {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0.1rem;
    }

    .input-field {
      font-size: 1rem;
      color: gray;
      margin: 1rem 0;
      margin-left: 0;
    }

    .input-field input {
      height: 1.1rem;
      width: 15rem;
    }

    .third button {
      font-size: 1rem;
      padding: 1rem 5.2rem;
      margin: 0;
    }

    .fourth {
      display: none;
    }
  }
`;
