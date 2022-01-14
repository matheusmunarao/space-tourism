import React, { useState } from 'react';
import TitlePage from '../../components/TitlePage';
import DestinationSubMenu from '../../components/SubMenus/DestinationSubMenu';
import DestinationImage from '../../components/Destination/DestinationImage';
import DestinationPlace from '../../components/Destination/DestinationPlace';
import DestinationText from '../../components/Destination/DestinationText';
import DestinationInfo from '../../components/Destination/DestinationInfo';
import { destinationName } from '../../components/utils/DestinationData';
import { DestinationContext } from '../../contexts/DestinationContext';
import './Destination.css';

const Destination = () => {
  const [destination, setDestination] = useState('moon');

  console.log(destinationName);

  const teste = 'sadsada';

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      <div className="bg-destination">
        <div className="container">
          <div>
            <TitlePage page="PICK YOUR DESTINATION" />
            <DestinationImage src="" alt="" />
          </div>
          <div>
            <DestinationSubMenu />
            <DestinationPlace />
            <DestinationText text={teste} />
            <DestinationInfo />
          </div>
        </div>
      </div>
    </DestinationContext.Provider>
  );
};

export default Destination;
