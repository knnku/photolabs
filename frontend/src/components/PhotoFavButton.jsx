import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [selected, setSelect] = useState(false);

  const favPhoto = useCallback(() => {
    console.log("Clicked fav button!");
    setSelect(!selected);

    // Toggle the displayAlert state
  }, [selected, setSelect]);

  return (
    <div onClick={() => favPhoto()} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
