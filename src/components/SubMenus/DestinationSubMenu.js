import React, { useContext } from "react";
import { DestinationContext } from "../../contexts/DestinationContext";
import { destinationName } from "../../components/utils/DestinationData";

const DestinationSubMenu = () => {
  const { setDestination } = useContext(DestinationContext);

  return (
    <nav>
      {destinationName.map((name, index) => {
        return (
          <button
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
