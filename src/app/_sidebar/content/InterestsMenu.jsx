import React, { Fragment } from "react";
import siteStructure from "app_structure ";
import Shortcut from "./shortcut";

// import "../sidebar.css";

const InterestsMenu = () => {
  const interestsMenuArray = siteStructure("ar").sideNav.interestsMenu;

  return (
    <div>
      {
        interestsMenuArray.map((item) => {
        return (
          <Fragment key={item.id}>
            <Shortcut
              // icon={createMenuArray.icon}
              title={item.title}
              to={item.to}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default InterestsMenu;
