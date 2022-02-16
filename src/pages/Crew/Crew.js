import React, { useState } from "react";
import CrewSubMenu from "../../components/SubMenus/CrewSubMenu";
import CrewImage from "../../components/Crew/CrewImage";
import CrewRole from "../../components/Crew/CrewRole";
import CrewPerson from "../../components/Crew/CrewPerson";
import CrewInfo from "../../components/Crew/CrewInfo";
import { CrewContext } from "../../contexts/CrewContext";
import TitlePage from "../../components/TitlePage";

const Crew = () => {
  const [crew, setCrew] = useState("Douglas Hurley");

  return (
    <CrewContext.Provider value={{ crew, setCrew }}>
      <div className="bg-crew">
        <div className="container">
          <div>
            <TitlePage page="MEET YOUR CREW" />
            <div>
              <CrewRole />
              <CrewPerson />
              <CrewInfo />
              <CrewSubMenu />
            </div>
          </div>
          <div>
            <CrewImage />
          </div>
        </div>
      </div>
    </CrewContext.Provider>
  );
};

export default Crew;
