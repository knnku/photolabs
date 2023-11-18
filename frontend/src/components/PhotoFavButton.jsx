import React, { useCallback } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ favedPhotos, favePhoto, photoId }) => {
  //Using a var to track favedphotos for heart icon display
  const isFaved = favedPhotos.includes(photoId);

  const favPhoto = useCallback(() => {
    //Call fave photo handler and set state
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
