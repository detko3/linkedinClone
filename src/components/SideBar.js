import { Avatar } from "@material-ui/core";
import React from "react";

import "./SideBar.css";

const SideBar = () => {
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
        <Avatar className="sideBarAvatar" />
        <h2>My name</h2>
        <h4>some_personal_information</h4>
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
