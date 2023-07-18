import React, { Fragment } from "react";
import siteStructure from "app_structure ";
import Shortcut from "./Shortcut";
import "../sidebar.css";

const SideMenu = () => {
  const sideMenuArray = siteStructure("ar").sideNav.sideMenu;

  return (
    <div>
      {" "}
      {sideMenuArray.map((item) => {
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

export default SideMenu;
