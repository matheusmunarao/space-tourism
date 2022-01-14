import React, { useState } from 'react';

const TechnologySubMenu = () => {
  const [technology, setTechnology] = useState('');

  console.log(technology);

  return (
    <nav>
      <button type="button" onClick={() => setTechnology('')}>
        MOON
      </button>
      <button type="button" onClick={() => setTechnology('')}>
        MARS
      </button>
      <button type="button" onClick={() => setTechnology('')}>
        EUROPA
      </button>
      <button type="button" onClick={() => setTechnology('')}>
        TITAN
      </button>
    </nav>
  );
};

export default TechnologySubMenu;
