import React from "react";

import SidebarOption from "./SidebarOption/SidebarOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active title="Home" Icon={HomeIcon} />
      <SidebarOption title="Explore" Icon={SearchIcon} />
      <SidebarOption title="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption title="Messages" Icon={MailOutlineIcon} />
      <SidebarOption title="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption title="Lists" Icon={ListAltIcon} />
      <SidebarOption title="Profile" Icon={PermIdentityIcon} />
      <SidebarOption title="More" Icon={MoreHorizIcon} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
