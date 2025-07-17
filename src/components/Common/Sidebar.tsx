import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard/home">Home</Link>
    </div>
  );
};

export default Sidebar;
