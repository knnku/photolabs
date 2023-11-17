import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ updatePhotosByTopicId, id, title }) => {

  return (
    <div
      className="topic-list__item"
      id={id}
      onClick={() => updatePhotosByTopicId(id)}
    >
      <span className="">{title}</span>
    </div>
  );
};

export default TopicListItem;
