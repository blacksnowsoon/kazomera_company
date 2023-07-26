import React from "react";
import { Link } from "react-router-dom";

// this can be convert to global component just add linkClassName, iconClassName, titleClassName
// and move it to the componenets folder 👏 🚀👏 

const Shortcut = ({ title, to }) => {
  return (
    <Link to={to} className="shortcut">
      <div className="shortcut__icon"></div>
      <h3 className="shortcut__title">{title}</h3>
    </Link>
  );
};

export default Shortcut;
