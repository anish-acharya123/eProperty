import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card(props) {
  let { Id, Title, Text } = props;

  return (
    <>
      <div className="container1">
        <div className="id">
          <h2>{Id}</h2>
        </div>
        <div className="title-text">
          <div className="title">{Title}</div>
          <div className="text">{Text}</div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  Id: PropTypes.number.isRequired,
  Title: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
};

Card.defaultProps = {
  Id: 1,
  title: "set title here",
  aboutText: "About text here",
};
