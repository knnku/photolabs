import React from "react";

import PhotoFavButton from "./PhotoFavButton";
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
    <div key={photoId} className="photo-list__item">
      <PhotoFavButton />
      <img src={imageSource} className="photo-list__image" />
      <footer className="photo-list__user-details photo-list__user-info">
        <img src={profile} className="photo-list__user-profile" />
        <div>
          <p>{userName}</p>
          <p className="photo-list__user-location">{`${city}, ${country}`}</p>
        </div>
      </footer>
    </div>
  );
};

export default PhotoListItem;
