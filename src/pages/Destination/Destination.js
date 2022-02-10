import React, { useState } from "react";
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
  const [destination, setDestination] = useState("moon");

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      <div className="bg-destination">
        <div className="container">
          {destinations.find((element) => {
            return (
              <>
                <div>
                  <TitlePage page="PICK YOUR DESTINATION" />
                  <DestinationImage src="" alt="" />
                </div>
                <div>
                  <DestinationSubMenu />
                  <DestinationPlace />
                  <DestinationText
                    text={
                      element.name === destination ? element.description : null
                    }
                  />
                  <DestinationInfo />
                </div>
              </>
            );
          })}
          ;
        </div>
      </div>
    </DestinationContext.Provider>
  );
};

export default Destination;
