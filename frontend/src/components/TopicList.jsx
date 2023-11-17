import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ updatePhotosByTopicId, topics }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return (
          <TopicListItem
            key={topic.id}
            id={topic.id}
            title={topic.title}
            updatePhotosByTopicId={updatePhotosByTopicId}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
