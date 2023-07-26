import React, { Fragment } from "react";
import siteStructure from "app_structure ";
import Shortcut from "./shortcut";
// import "../sidebar.css"; // no need to import it here as you already imported in the parent component

const CreateMenu = () => {
  const createMenuArray = siteStructure("ar").sideNav.createMenu;

  return (
    <div>
      {createMenuArray.map((item) => {
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

export default CreateMenu;
