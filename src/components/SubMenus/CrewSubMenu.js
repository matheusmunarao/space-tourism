import React, { useContext } from "react";
import { CrewContext } from "../../contexts/CrewContext";
import { crewName } from "../../components/utils/CrewData";

const CrewSubMenu = () => {
  const { setCrew } = useContext(CrewContext);

  return (
    <nav>
      {crewName.map((name, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => setCrew(name)}
          ></button>
        );
      })}
    </nav>
  );
};

export default CrewSubMenu;
