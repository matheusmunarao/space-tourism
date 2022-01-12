import React from 'react';

import './Destination.css';

import TitlePage from '../../components/TitlePage';
import DestinationImage from '../../components/Destination/DestinationImage';
import DestinationPlace from '../../components/Destination/DestinationPlace';
import DestinationText from '../../components/Destination/DestinationText';
import DestinationInfo from '../../components/Destination/DestinationInfo';

const Destination = () => {
  return (
    <div className="bg-destination">
      <div className="container">
        <div>
          <TitlePage page="PICK YOUR DESTINATION" />
          <DestinationImage src="" alt="" />
        </div>
        <div>
          {/* <SubMenu /> */}
          <DestinationPlace />
          <DestinationText />
          <DestinationInfo />
        </div>
      </div>
    </div>
  );
};

export default Destination;
