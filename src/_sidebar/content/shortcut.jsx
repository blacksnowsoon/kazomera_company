import React from "react";
import { Link } from "react-router-dom";

const Shortcut = ({ title, to }) => {
  return (
    <Link to={to} className="shortcut">
      <div className="shortcut__icon"></div>
      <h3 className="shortcut__title">{title}</h3>
    </Link>
  );
};

export default Shortcut;
