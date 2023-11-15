import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photoId,
  city,
  country,
  imageSource,
  userName,
  profile,
  similarPhotos,
  toggleModal,
  favedPhotos,
  favePhoto,
}) => {
  const handlePhotoItemClick = () => {
    const photoData = {
      photoId,
      city,
      country,
      imageSource,
      userName,
      profile,
      similarPhotos
    };
    toggleModal(photoData);

    console.log(`Clicked on photo #: ${photoId}`);
  };
  return (
    <div key={photoId} id={photoId} className="photo-list__item">
      <PhotoFavButton
        photoId={photoId}
        favedPhotos={favedPhotos}
        favePhoto={favePhoto}
      />
      <img
        src={imageSource}
        className="photo-list__image"
        onClick={() => handlePhotoItemClick()}
      />
      <footer className="photo-list__user-details photo-list__user-info">
        <img src={profile} className="photo-list__user-profile" />
        <div>
          <span>{userName}</span>
          <div className="photo-list__user-location">{`${city}, ${country}`}</div>
        </div>
      </footer>
    </div>
  );
};

export default PhotoListItem;
