import React from "react";

import "./SidebarOption.css";

const SidebarOption = ({ active, title, Icon }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarOption;
