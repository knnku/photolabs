import React, { useCallback } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ favedPhotos, favePhoto, photoId }) => {
  const isFaved = favedPhotos.includes(photoId);

  const favPhoto = useCallback(() => {
    console.log("Clicked fav button on photo#", photoId);

    favePhoto(photoId);
  }, [favedPhotos, favePhoto, photoId]);

  const handleButtonClick = () => {
    favPhoto();
  };

  return (
    <div onClick={handleButtonClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFaved} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
