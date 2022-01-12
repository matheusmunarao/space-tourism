import React, { useState } from 'react';

const SubMenu = () => {
  const [destination, setDestination] = useState('moon');

  console.log(destination);

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

export default SubMenu;
