import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1506269996138-4c6d92fbd8a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNzQ4Mzk4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=60"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Uendi Bruci</h2>
        <h4>uendibruci17@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2548</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react.js")}
        {recentItem("programming")}
        {recentItem("softwareenginering")}
      </div>
    </div>
  );
}

export default Sidebar;
