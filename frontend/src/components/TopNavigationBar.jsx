import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "components/TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ favedPhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <span>
        <FavBadge favedPhotos={favedPhotos} />
      </span>
    </div>
  );
};

export default TopNavigation;
