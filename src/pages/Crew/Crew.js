import React, { useState, useEffect } from "react";
import CrewSubMenu from "../../components/SubMenus/CrewSubMenu/CrewSubMenu";
import CrewImage from "../../components/Crew/CrewImage";
import CrewRole from "../../components/Crew/CrewRole";
import CrewPerson from "../../components/Crew/CrewPerson";
import CrewInfo from "../../components/Crew/CrewInfo";
import { CrewContext } from "../../contexts/CrewContext";
import TitlePage from "../../components/TitlePage";
import { crew } from "../../data/data.json";
import "./style.css";

import commanderImage from "../../assets/crew/image-douglas-hurley.png";

const Crew = () => {
  const [showedCrew, setShowedCrew] = useState("Douglas Hurley");
  const [currentCrew, setCurrentCrew] = useState({});

  useEffect(() => {
    crew.filter((element) => {
      if (element.name === showedCrew) {
        return setCurrentCrew(element);
      }

      return null;
    });
  }, [showedCrew]);

  return (
    <CrewContext.Provider value={{ showedCrew, setShowedCrew }}>
      <div className="bg-crew">
        <div className="container flex-crew">
          <div>
            <TitlePage page="2. MEET YOUR CREW" />
            <div>
              <CrewRole role={currentCrew.role} />
              <CrewPerson name={currentCrew.name} />
              <CrewInfo info={currentCrew.bio} />
              <CrewSubMenu />
            </div>
          </div>
          <div>
            <CrewImage src={commanderImage} />
          </div>
        </div>
      </div>
    </CrewContext.Provider>
  );
};

export default Crew;
