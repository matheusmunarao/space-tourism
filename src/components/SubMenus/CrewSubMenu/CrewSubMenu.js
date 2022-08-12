import React, { useContext } from "react";
import { CrewContext } from "../../../contexts/CrewContext";
import { crewName } from "../../utils/CrewData";

import "./style.css";

const CrewSubMenu = () => {
  const { setShowedCrew } = useContext(CrewContext);

  return (
    <nav>
      {crewName.map((name, index) => {
        return (
          <button
            className="crew-button"
            key={index}
            type="button"
            onClick={() => setShowedCrew(name)}
          ></button>
        );
      })}
    </nav>
  );
};

export default CrewSubMenu;
