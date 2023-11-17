import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "components/TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ updatePhotosByTopicId, topics, favedPhotos }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        updatePhotosByTopicId={updatePhotosByTopicId}
      />
      <span>
        {/* Fav badge will display a notif on icon if favedPhotos state length is > 0*/}
        <FavBadge isFavPhotoExist={favedPhotos.length} />
      </span>
    </div>
  );
};

export default TopNavigation;
