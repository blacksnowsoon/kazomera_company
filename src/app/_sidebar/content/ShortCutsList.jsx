// import "../sidebar.css";
import React from "react";
import CreateMenu from "./CreateMenu";
import SideMenu from "./SideMenu";
import InterestsMenu from "./InterestsMenu";

// import siteStructure from "app_structure ";

const ShortCutsList = () => {
  // you can destruct the menus content once from here 
  // const [langOpti, setLangOpti] = React.useState('ar')
  // const { sideMenu, interestsMenu, createMenu } = siteStructure(langOpti).sideNav
  // then send it to each child as prop so when we change the language one all will change
  // console.log(sideMenu, interestsMenu, createMenu)
  // then create a global component in the component folder to generate the list one of these three can do the job
  // by the end will get just one file in the _sidebar to generate the list and 2 files in the 
  // component folder as helpers instead of 6 files
  return (
    <>
      <CreateMenu />
      <hr />
      <SideMenu />
      <hr />
      <InterestsMenu />
    </>
  );
};

export default ShortCutsList;
