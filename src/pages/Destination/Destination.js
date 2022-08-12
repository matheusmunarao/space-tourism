import React, { useEffect, useState } from "react";
import TitlePage from "../../components/TitlePage";
import DestinationSubMenu from "../../components/SubMenus/DestinationSubMenu/DestinationSubMenu";
import DestinationImage from "../../components/Destination/DestinationImage/DestinationImage";
import DestinationPlace from "../../components/Destination/DestinationPlace/DestinationPlace";
import DestinationText from "../../components/Destination/DestinationText/DestinationText";
import DestinationInfo from "../../components/Destination/DestinationInfo/DestinationInfo";
import { DestinationContext } from "../../contexts/DestinationContext";
import "./Destination.css";
import { destinations } from "../../data/data.json";

import MoonImage from "../../assets/destination/image-moon.png";

const Destination = () => {
  const [destination, setDestination] = useState("Moon");
  const [currentDestination, setCurrentDestination] = useState({});

  useEffect(() => {
    destinations.filter((element) => {
      if (element.name === destination) {
        return setCurrentDestination(element);
      }

      return null;
    });
  }, [destination]);

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      <div className="bg-destination">
        <div className="container flex-destination">
          <div>
            <TitlePage page="1. PICK YOUR DESTINATION" />
            <DestinationImage src={MoonImage} alt={currentDestination.name} />
          </div>
          <div className="info-content">
            <DestinationSubMenu />
            <DestinationPlace place={currentDestination.name} />
            <DestinationText text={currentDestination.description} />
            <div className="divisor"></div>
            <DestinationInfo
              distance={currentDestination.distance}
              travelTime={currentDestination.travel}
            />
          </div>
        </div>
      </div>
    </DestinationContext.Provider>
  );
};

export default Destination;
