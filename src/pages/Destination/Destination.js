import React, { useEffect, useState } from "react";
import TitlePage from "../../components/TitlePage";
import DestinationSubMenu from "../../components/SubMenus/DestinationSubMenu";
import DestinationImage from "../../components/Destination/DestinationImage";
import DestinationPlace from "../../components/Destination/DestinationPlace";
import DestinationText from "../../components/Destination/DestinationText";
import DestinationInfo from "../../components/Destination/DestinationInfo";
import { DestinationContext } from "../../contexts/DestinationContext";
import "./Destination.css";
import { destinations } from "../../data/data.json";

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
        <div className="container">
          <div>
            <TitlePage page="PICK YOUR DESTINATION" />
            <DestinationImage
              src={currentDestination.images?.webp}
              alt={currentDestination.name}
            />
          </div>
          <div>
            <DestinationSubMenu />
            <DestinationPlace place={currentDestination.name} />
            <DestinationText text={currentDestination.description} />
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
