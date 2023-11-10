import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ setFavedPhotos }) => {
  const [selected, setSelected] = useState(false);

  const favPhoto = useCallback(() => {
    console.log("Clicked fav button!");
    setSelected(!selected);

    // Toggle the displayAlert state
  }, [selected, setSelected]);

  const handleButtonClick = () => {
    // Call the setFavedPhotos function to update the state
    setFavedPhotos((prevCount) => prevCount + 1);
    favPhoto();
  };

  return (
    <div
      onClick={handleButtonClick}
      className="photo-list__fav-icon"
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
