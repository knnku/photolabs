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
  setFavedPhotos,
  togglePhotoModal,
}) => {
  /* Insert React */

  const handlePhotoItemClick = () => {
    const photoData = {
      photoId: photoId,
      city: city,
      country: country,
      imageSource: imageSource,
      userName: userName,
      profile: profile
    };
    togglePhotoModal(photoData);

    console.log(`Clicked photo #: ${photoId}`);
  };
  return (
    <div key={photoId} className="photo-list__item">
      <PhotoFavButton setFavedPhotos={setFavedPhotos} />
      <img
        src={imageSource}
        className="photo-list__image"
        onClick={() => handlePhotoItemClick()}
      />
      <footer className="photo-list__user-details photo-list__user-info">
        <img src={profile} className="photo-list__user-profile" />
        <div>
          <name>{userName}</name>
          <div className="photo-list__user-location">{`${city}, ${country}`}</div>
        </div>
      </footer>
    </div>
  );
};

export default PhotoListItem;
