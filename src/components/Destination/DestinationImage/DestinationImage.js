import React from "react";
import "./style.css";

const DestinationImage = (props) => {
  return (
    <>
      <img src={props.src} alt={props.alt} />
    </>
  );
};

export default DestinationImage;
