import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title }) => {
  return (
    <div className="topic-list__item" id={id}>
      <span className="">{title}</span>
    </div>
  );
};

export default TopicListItem;
