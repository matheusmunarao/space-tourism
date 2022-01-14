import React, { useState } from 'react';

const CrewSubMenu = () => {
  const [crew, setCrew] = useState('');

  console.log(crew);

  return (
    <nav>
      <button type="button" onClick={() => setCrew('')}>
        MOON
      </button>
      <button type="button" onClick={() => setCrew('')}>
        MARS
      </button>
      <button type="button" onClick={() => setCrew('')}>
        EUROPA
      </button>
      <button type="button" onClick={() => setCrew('')}>
        TITAN
      </button>
    </nav>
  );
};

export default CrewSubMenu;
