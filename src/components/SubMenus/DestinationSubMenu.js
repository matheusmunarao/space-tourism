import React, { useContext } from 'react';
import { DestinationContext } from '../../contexts/DestinationContext';

const DestinationSubMenu = () => {
  const { setDestination } = useContext(DestinationContext);

  return (
    <nav>
      <button type="button" onClick={() => setDestination('moon')}>
        MOON
      </button>
      <button type="button" onClick={() => setDestination('mars')}>
        MARS
      </button>
      <button type="button" onClick={() => setDestination('europa')}>
        EUROPA
      </button>
      <button type="button" onClick={() => setDestination('titan')}>
        TITAN
      </button>
    </nav>
  );
};

export default DestinationSubMenu;
