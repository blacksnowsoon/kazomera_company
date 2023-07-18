import "./sidebar.css";
import React from "react";
import ShortCutsList from "./content/ShortCutsList";

// import React from 'react'
// import PropTypes from 'prop-types'

// import Icon from '../components/icons/_react-icons'
// import MainMenu from './content/ShortCutsList'
// import { NavLink } from 'react-router-dom';
// import { BsCamera } from 'react-icons/bs';

const SideBar = () => {
  return <div className="sidebar-container">{<ShortCutsList />}</div>;
};

export default SideBar;
