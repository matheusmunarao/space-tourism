import React from "react";
import "./style.css";

const DestinationInfo = (props) => {
  return (
    <div className="flex-info">
      <div>
        <p className="info-title">AVG. DISTANCE</p>
        <p className="info-data">{props.distance}</p>
      </div>
      <div>
        <p className="info-title">EST. TRAVEL TIME</p>
        <p className="info-data">{props.travelTime}</p>
      </div>
    </div>
  );
};

export default DestinationInfo;
