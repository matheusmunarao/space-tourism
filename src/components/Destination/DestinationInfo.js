import React from 'react';

const DestinationInfo = (props) => {
  return (
    <div>
      <div>
        <p>AVG. DISTANCE</p>
        <p>{props.distance}</p>
      </div>
      <div>
        <p>EST. TRAVEL TIME</p>
        <p>{props.travelTime}</p>
      </div>
    </div>
  );
};

export default DestinationInfo;
