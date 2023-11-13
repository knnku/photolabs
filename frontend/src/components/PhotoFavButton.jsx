import React, { useCallback } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ favedPhotos, toggleFave, photoId }) => {
  const isFaved = favedPhotos.includes(photoId);

  const handleButtonClick = () => {
    favPhoto();
  };

  const favPhoto = useCallback(() => {
    console.log("Clicked fav button on photo#", photoId);

    // Add photo using Id if does not exist in array
    toggleFave(photoId);
  }, [favedPhotos, toggleFave, photoId]);

  return (
    <div onClick={handleButtonClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFaved} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
