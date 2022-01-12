import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className="bg-home">
      <div className="container home-full-content">
        <div>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p className="p-destination">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <a href="/destination" className="explore">
            EXPLORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
