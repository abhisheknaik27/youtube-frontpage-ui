import React from "react";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div>
      <SidebarButton btnName={"Home"} />
      <SidebarButton btnName={"Shorts"} />
      <SidebarButton btnName={"Subscriptions"} />
      <SidebarButton btnName={"History"} />
      <SidebarButton btnName={"Playlist"} />
      <SidebarButton btnName={"Your Videos"} />
      <SidebarButton btnName={"Watch Later"} />
      <SidebarButton btnName={"Your Clips"} />
    </div>
  );
};

export default Sidebar;
