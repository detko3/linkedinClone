import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

import "./SideBar.css";

const SideBar = () => {
  const user = useSelector(selectUser);

  const recentItem = (item) => (
    <div className="sideBarRecentItem">
      <span className="sideBarHashTag">#</span>
      <p>{item}</p>
    </div>
  );

  return (
    <div className="sideBar">
      <div className="sideBarTop">
        <img src="https://picsum.photos/200" alt="" />
        <Avatar src={user.photoUrl} className="sideBarAvatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sideBarStats">
        <div className="sideBarStat">
          <p>Who viewed you</p>
          <p className="sideBarStatNumber">323</p>
        </div>
        <div className="sideBarStat">
          <p>Views on post</p>
          <p className="sideBarStatNumber">123</p>
        </div>
      </div>
      <div className="sideBarBottom">
        <p>Recent</p>
        {recentItem("item 1")}
        {recentItem("item 2")}
        {recentItem("item 3")}
        {recentItem("item 3")}
      </div>
    </div>
  );
};

export default SideBar;
