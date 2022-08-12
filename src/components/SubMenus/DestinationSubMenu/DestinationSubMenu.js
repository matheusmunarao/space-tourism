import React, { useContext } from "react";
import { DestinationContext } from "../../../contexts/DestinationContext";
import { destinationName } from "../../utils/DestinationData";

import "./style.css";

const DestinationSubMenu = () => {
  const { setDestination } = useContext(DestinationContext);

  return (
    <nav>
      {destinationName.map((name, index) => {
        return (
          <button
            className="destination-button"
            key={index}
            type="button"
            onClick={() => setDestination(name)}
          >
            {name.toUpperCase()}
          </button>
        );
      })}
    </nav>
  );
};

export default DestinationSubMenu;
