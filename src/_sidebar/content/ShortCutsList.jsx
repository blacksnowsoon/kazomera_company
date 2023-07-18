import React from "react";
import "../sidebar.css";
import CreateMenu from "./CreateMenu";
import SideMenu from "./SideMenu";
import InterestsMenu from "./InterestsMenu";

const ShortCutsList = () => {
  return (
    <div>
      <CreateMenu />
      <hr />
      <SideMenu />
      <hr />
      <InterestsMenu />
    </div>
  );
};

export default ShortCutsList;
