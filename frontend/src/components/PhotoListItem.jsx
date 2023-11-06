import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  photoId,
  city,
  country,
  imageSource,
  userName,
  profile,
}) => {
  /* Insert React */
  return (
    <div id={photoId}>
      <img src={imageSource} />
      <footer>
        <img src={profile} />
        <div>
          <h3>{userNgame}</h3>
          <p>{`${city}, ${country}`}</p>
        </div>
      </footer>
    </div>
  );
};

export default PhotoListItem;
